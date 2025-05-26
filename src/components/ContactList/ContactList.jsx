import { useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectContacts, deleteContact } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'

import styles from './ContactList.module.css'

import Contact from './Contact'

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)

  const filteredContacts = useMemo(
    () => contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ),
    [filter, contacts]
  )

    const handleDeliteContact = (id) => {
      dispatch(deleteContact(id))
    }

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}><Contact {...contact} handleDeliteContact={handleDeliteContact} /></li>
      ))}
    </ul>
  )
}

export default ContactList
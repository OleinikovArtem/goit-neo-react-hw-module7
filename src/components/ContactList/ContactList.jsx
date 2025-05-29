import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

import styles from './ContactList.module.css';

import Contact from './Contact';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDeliteContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) {
    return <p className={styles.loading}>Loading contacts...</p>;
  }

  return (
    <>
      {error ? <p className={styles.error}>Error: {error}</p> : null}
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact {...contact} handleDeliteContact={handleDeliteContact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from './redux/contactsOps';

import { ContactForm, SearchBox, ContactList } from './components';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

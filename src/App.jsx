import { ContactForm, SearchBox, ContactList } from './components'


const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App

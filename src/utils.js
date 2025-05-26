
const CONTACTS_KEY = 'contacts'

export const saveContactsToLocalStorage = (contacts = []) => {
  const json = JSON.stringify(contacts)
  localStorage.setItem(CONTACTS_KEY, json)
}

export const getContactsFromLocalStorage = () => {
  const json = localStorage.getItem(CONTACTS_KEY)
  if (!json) return [];
  return JSON.parse(json)
}

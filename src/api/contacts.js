import axios from 'axios';
import { API_BASE_URL } from '../config';

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchContacts = async () => {
  const response = await instance.get(`/contacts`);
  return response.data;
};

export const addContact = async (contact) => {
  const response = await instance.post(`/contacts`, contact);
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};

import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactAPI from '../api/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    return await contactAPI.fetchContacts();
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return thunkAPI.rejectWithValue('Failed to fetch contacts');
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    return await contactAPI.addContact(contact);
  } catch (error) {
    console.error('Failed to add contact:', error);
    return thunkAPI.rejectWithValue('Failed to add contact');
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    return await contactAPI.deleteContact(id);
  } catch (error) {
    console.error('Failed to delete contact:', error);
    return thunkAPI.rejectWithValue('Failed to delete contact');
  }
});

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, actions) {
      if (state.contacts.some(contact => contact.name === actions.payload.name)) {
        alert('This contact is already exist');
        return
      }
      state.contacts.push(actions.payload);
    },
    removeContact: (state, actions) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
    filterContacts: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
}

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer)

export const { addContact, removeContact, filterContacts } =
  contactSlice.actions;

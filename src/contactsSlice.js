import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Оголошуємо асинхронні генератори екшенів
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetch('https://64e99b2ebf99bdcc8e66d232.mockapi.io/contacts/Contacts');
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await fetch('https://64e99b2ebf99bdcc8e66d232.mockapi.io/Contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
  });
  const data = await response.json();
  return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await fetch(`https://64e99b2ebf99bdcc8e66d232.mockapi.io/Contacts/${contactId}`, {
    method: 'DELETE',
  });
  return contactId;
});

// Створюємо Slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducers: {
        fetchingInProgress(state) {
          state.isLoading = true;
        },
        fetchingSuccess(state, action) {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        },
        fetchingError(state, action) {
          state.isLoading = false;
          state.error = action.payload;
        },
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;

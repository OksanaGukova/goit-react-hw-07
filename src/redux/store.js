import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";


/* import storage from "redux-persist/lib/storage";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice"; */



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

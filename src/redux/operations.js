import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://669d488815704bb0e305a8a9.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts')
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contakts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
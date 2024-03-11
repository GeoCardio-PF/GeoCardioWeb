import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOxy = createAsyncThunk(
  "oxygen/fetch",
  async () => {
    const response = await fetch("https://api.example.com/oxygen");
    return response.json();
  }
);

const oxygenSlice = createSlice({
  name: 'oxygen',
  initialState: { 
    oxygen: '', 
    isLoading: false, 
    hasError: false 
  },
  reducers: {
    setOxygen: (state, action) => { 
      state.oxygen.push(action.payload) 
    }        
  },
  extraReducers: {
    [fetch.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetch.fulfilled]: (state, action) => {
      state.oxygen.push(action.payload);
      state.isLoading = false;
      state.hasError = false;
    },
    [fetch.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
})
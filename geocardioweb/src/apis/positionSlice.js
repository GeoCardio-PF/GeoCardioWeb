import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOxy = createAsyncThunk(
  "position/fetch",
  async () => {
    const response = await fetch("https://api.example.com/users");
    return response.json();
  }
);
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOxy = createAsyncThunk(
  "saturation/fetch",
  async () => {
    const response = await fetch("https://api.example.com/users");
    return response.json();
  }
);
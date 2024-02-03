import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65245327ea560a22a4e9beae.mockapi.io/api/krnk';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, { rejectWithValue }) => {
    try {
      const url = `/adverts?page=${page}&limit=12`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

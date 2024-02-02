import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
});

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

// export const {  } = favoritesSlice.actions;

export const favoritesReducer = persistReducer(
  favoritesConfig,
  favoritesSlice.reducer
);

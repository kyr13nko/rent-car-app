import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  addToFavorite: (state, { payload }) => state.items.push(payload),
  delFromFavorite: (state, { payload }) =>
    (state.items = state.items.filter(car => car.id !== payload.id)),
});

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

export const { addToFavorite, delFromFavorite } = favoritesSlice.actions;

export const favoritesReducer = persistReducer(favoritesConfig, favoritesSlice.reducer);

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterBrand: '',
  isFiltered: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.isFiltered = true;
      state.filterBrand = payload.brand;
    },
    resetFilter(state) {
      state.isFiltered = false;
      state.filterBrand = '';
    },
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

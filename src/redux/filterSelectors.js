import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from './carsSelectors';

export const selectBrand = state => state.filter.filterBrand;
export const selectIsFiltered = state => state.filter.isFiltered;

export const selectFilteredCars = createSelector([selectCars, selectBrand], (cars, filterBrand) => {
  const filteredCars = cars.filter(car => {
    if (filterBrand && car.make.toLowerCase() !== filterBrand.toLowerCase()) {
      return false;
    }

    return true;
  });

  return filteredCars;
});

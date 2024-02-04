import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from './carsSelectors';

export const selectBrand = state => state.filter.filterBrand;
export const selectPrice = state => state.filter.filterPrice;
export const selectMileageTo = state => state.filter.filterMileage.to;
export const selectMileageFrom = state => state.filter.filterMileage.from;
export const selectIsFiltered = state => state.filter.isFiltered;

export const selectFilteredCars = createSelector(
  [selectCars, selectBrand, selectPrice, selectMileageFrom, selectMileageTo],
  (cars, filterBrand, filterPrice, filterMileageFrom, filterMileageTo) => {
    const filteredCars = cars.filter(car => {
      const carPriceToNum = parseInt(car.rentalPrice.replace('$', ''));
      const filterPriceToNum = parseInt(filterPrice);

      if (filterBrand && car.make.toLowerCase() !== filterBrand.toLowerCase()) {
        return false;
      }

      if (filterPrice && carPriceToNum > filterPriceToNum) {
        return false;
      }

      if (
        filterMileageFrom &&
        filterMileageTo &&
        (car.mileage < filterMileageFrom || car.mileage > filterMileageTo)
      ) {
        return false;
      }
      return true;
    });

    return filteredCars;
  }
);

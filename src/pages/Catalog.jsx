import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetFilter } from '../redux/filterSlice';
import { fetchCars } from '../redux/carsOperations';
import { selectCars, selectIsLoading } from '../redux/carsSelectors';
import { selectFilteredCars, selectIsFiltered } from '../redux/filterSelectors';

import CarList from 'components/CarList/CarList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import SearchForm from 'components/SearchForm/SearchForm';
import EmptyResult from 'components/EmptyResult/EmptyResult';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const isFiltered = useSelector(selectIsFiltered);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCars(currentPage));
    dispatch(resetFilter());
  }, [currentPage, dispatch]);

  const handleNewPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const lastPage = cars.length % 12 !== 0;

  return (
    <>
      <SearchForm />
      {isFiltered && filteredCars.length === 0 ? (
        <EmptyResult />
      ) : (
        <CarList cars={isFiltered ? filteredCars : cars} />
      )}
      {!lastPage && !isLoading && !isFiltered && (
        <LoadMoreBtn handleNewPage={handleNewPage}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Catalog;

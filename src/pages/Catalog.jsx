import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/carsOperations';

import CarList from 'components/CarList/CarList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(state => state.cars.items);

  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [currentPage, dispatch]);

  const handleNewPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const lastPage = cars.length % 12 !== 0;

  return (
    <>
      <CarList cars={cars} />
      {!lastPage && <LoadMoreBtn handleNewPage={handleNewPage} />}
    </>
  );
};

export default Catalog;

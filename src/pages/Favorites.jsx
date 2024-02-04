import CarList from 'components/CarList/CarList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/carsSelectors';
import EmptyResult from 'components/EmptyResult/EmptyResult';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return <>{favorites.length === 0 ? <EmptyResult /> : <CarList cars={favorites} />}</>;
};

export default Favorites;

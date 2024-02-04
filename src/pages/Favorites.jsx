import CarList from 'components/CarList/CarList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/carsSelectors';
import EmptyFavorites from 'components/EmptyResult/EmptyResult';
import SearchForm from 'components/SearchForm/SearchForm';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <SearchForm />
      {favorites.length === 0 ? <EmptyFavorites /> : <CarList cars={favorites} />}
    </>
  );
};

export default Favorites;

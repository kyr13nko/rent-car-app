import CarList from 'components/CarList/CarList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <CarList cars={favorites} />
    </>
  );
};

export default Favorites;

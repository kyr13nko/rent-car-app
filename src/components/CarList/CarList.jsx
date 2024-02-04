import CarCard from 'components/CarCard/CarCard';
import { List } from './CarList.styled';

const CarList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </List>
  );
};

export default CarList;

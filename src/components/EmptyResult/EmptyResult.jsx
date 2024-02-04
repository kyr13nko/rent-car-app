import NoResultsImg from '../../assets/no-results.png';
import { Title, Wrapper } from './EmptyResult.styled';

const EmptyFavorites = () => {
  return (
    <Wrapper>
      <img src={NoResultsImg} alt="search img" width="300" />
      <Title>No Results Found</Title>
      <p>Please try to add some car to favorite</p>
    </Wrapper>
  );
};

export default EmptyFavorites;

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addToFavorite, delFromFavorite } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';

import { ReactComponent as IconAddSvg } from '../../assets/fullHeart.svg';
import { ReactComponent as IconDelSvg } from '../../assets/emptyHeart.svg';

import Modal from 'components/Modal/Modal';

import {
  Button,
  CardWrapper,
  FavoriteButton,
  Image,
  ImageWrap,
  InfoItem,
  InfoList,
  InfoWrap,
  Span,
  Title,
  TitleRaw,
} from './CarCard.styled';

const CarCard = ({ car }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    type,
    id,
    accessories,
  } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prev => !prev);

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(car));
  };

  const handleDelFromFavorite = () => {
    dispatch(delFromFavorite(car));
  };

  const isInFavorite = favorites.find(item => item.id === id);

  return (
    <>
      <CardWrapper>
        <ImageWrap>
          <Image src={img} width="274px" alt={model} loading="lazy" />
          {isInFavorite ? (
            <FavoriteButton type="button" onClick={handleDelFromFavorite}>
              <IconAddSvg />
            </FavoriteButton>
          ) : (
            <FavoriteButton type="button" onClick={handleAddToFavorite}>
              <IconDelSvg />
            </FavoriteButton>
          )}
        </ImageWrap>

        <InfoWrap>
          <TitleRaw>
            <Title>
              {make} <Span>{model}</Span>, {year}
            </Title>
            <p>{rentalPrice}</p>
          </TitleRaw>

          <InfoList>
            <InfoItem>{address.split(',')[1]}</InfoItem>
            <InfoItem>{address.split(',')[2]}</InfoItem>
            <InfoItem>{rentalCompany}</InfoItem>
          </InfoList>

          <InfoList>
            <InfoItem>{mileage}</InfoItem>
            <InfoItem>{type}</InfoItem>
            <InfoItem>{id}</InfoItem>
            <InfoItem>{accessories[0]}</InfoItem>
          </InfoList>
        </InfoWrap>

        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
      </CardWrapper>

      {showModal && <Modal onClose={toggleModal} car={car} />}
    </>
  );
};

export default CarCard;

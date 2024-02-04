import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { conditions } from 'utils/rentalCondition';

import {
  Button,
  CloseIcon,
  ConditionItem,
  ConditionList,
  Description,
  Image,
  InfoItem,
  InfoLine,
  InfoTitle,
  InfoWrap,
  ModalStyled,
  Overlay,
  Span,
  SpanCondition,
  Title,
  TitleLine,
} from './Modal.styled';

import { ReactComponent as SvgCloseIconSvg } from '../../assets/closeIcon.svg';
import { prices } from 'utils/price';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, car }) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    mileage,
    img,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = car;

  const condition = conditions(rentalConditions);
  const price = prices(rentalPrice);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <CloseIcon onClick={onClose}>
          <SvgCloseIconSvg />
        </CloseIcon>

        <Image src={img} alt={make} loading="lazy" width="469" height="314" />

        <InfoWrap>
          <TitleLine>
            <Title>
              {make} <Span>{model}</Span>, {year}
            </Title>
          </TitleLine>

          <InfoLine>
            <InfoItem>{address.split(',')[1]}</InfoItem>
            <InfoItem>{address.split(',')[2]}</InfoItem>
            <InfoItem>Id: {id}</InfoItem>
            <InfoItem>Year: {year}</InfoItem>
            <InfoItem>Type: {type}</InfoItem>
          </InfoLine>
          <InfoLine>
            <InfoItem>Fuel Consumption: {fuelConsumption}</InfoItem>
            <InfoItem>Engine Size: {engineSize}</InfoItem>
          </InfoLine>
          <Description>{description}</Description>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <InfoLine>
            {accessories.map(item => (
              <InfoItem key={item}>{item}</InfoItem>
            ))}
          </InfoLine>
          <InfoLine>
            {functionalities.map(item => (
              <InfoItem key={item}>{item}</InfoItem>
            ))}
          </InfoLine>
          <InfoTitle>Rental Conditions:</InfoTitle>
          <ConditionList>
            <ConditionItem>
              <p>
                {condition.conditionText}
                <SpanCondition> {condition.conditionAge}</SpanCondition>
              </p>
            </ConditionItem>
            <ConditionItem>{condition.condition2}</ConditionItem>
            <ConditionItem>{condition.condition3}</ConditionItem>
            <ConditionItem>
              Mileage: <SpanCondition>{mileage.toLocaleString('en-US')}</SpanCondition>
            </ConditionItem>
            <ConditionItem>
              Price: <SpanCondition>{price}$</SpanCondition>
            </ConditionItem>
          </ConditionList>
        </InfoWrap>

        <Button
          href="tel:+380730000000"
          onTouchStart={() => (window.location.href = 'tel:380730000000')}
        >
          Rental car
        </Button>
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';

import { updateFilter } from '../../redux/filterSlice';
import { fetchCars } from '../../redux/carsOperations';

import makes from '../../data/makes.json';

import {
  BrandWrapper,
  Button,
  Form,
  InputLeft,
  InputMileageText,
  InputRight,
  Label,
  MileageWrapper,
} from './SearchForm.styled';
import { colorStyles } from './colorStyles';

const getBrands = carBrandOptions => {
  return carBrandOptions.map(brand => ({ value: brand, label: brand }));
};
const brands = getBrands(makes);

const SearchForm = () => {
  const dispatch = useDispatch();

  const brandRef = useRef(null);

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value.trim();

    dispatch(
      updateFilter({
        brand,
      })
    );
    dispatch(fetchCars());
    form.reset();

    brandRef.current.clearValue();
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <BrandWrapper>
        <Label>
          Car Brand
          <Select
            name="brand"
            options={brands}
            ref={ref => (brandRef.current = ref)}
            styles={colorStyles(224)}
            placeholder="Enter the text"
          />
        </Label>

        <Label>
          Price/1 hour
          <Select name="price" styles={colorStyles(125)} placeholder="To $" />
        </Label>
      </BrandWrapper>

      <MileageWrapper>
        <Label>
          Car mileage / km
          <InputMileageText>From</InputMileageText>
          <InputLeft type="text" name="mileageFrom" autoComplete="off" />
        </Label>

        <Label style={{ color: '#ffffff' }}>
          Car mileage / km
          <InputMileageText>To</InputMileageText>
          <InputRight type="text" name="mileageTo" autoComplete="off" />
        </Label>
      </MileageWrapper>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;

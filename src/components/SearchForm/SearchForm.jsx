import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';

import { updateFilter } from '../../redux/filterSlice';
import { formatMileage } from 'utils/formatMileage';
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

const generatePrices = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    value: String((index + 1) * 10),
    label: String((index + 1) * 10),
  }));
};
const prices = generatePrices();

const SearchForm = () => {
  const dispatch = useDispatch();

  const brandRef = useRef(null);
  const priceRef = useRef(null);

  const [selectedPrice, setSelectedPrice] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [priceOptions, setPriceOptions] = useState([]);
  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });

  const handlePriceChange = selectedOption => {
    if (selectedOption) {
      setSelectedPrice(selectedOption.value);
      setPriceOptions(generatePrices(selectedOption.value));
    }
  };

  const handleMileageChange = (part, value) => {
    const formatValue = formatMileage(value);
    setMileageRange(prev => ({ ...prev, [part]: formatValue }));
  };

  const handleMileageFrom = event => handleMileageChange('from', event.target.value);
  const handleMileageTo = event => handleMileageChange('to', event.target.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value.trim();
    const price = form.elements.price.value;

    const mileageFrom = parseFloat(form.elements.mileageFrom.value.replace(/,/g, ''));
    const mileageTo = parseFloat(form.elements.mileageTo.value.replace(/,/g, ''));

    dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
    dispatch(fetchCars());
    form.reset();
    setMileageRange({ from: '', to: '' });

    brandRef.current.clearValue();
    priceRef.current.clearValue();
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
          <Select
            name="price"
            defaultValue={selectedPrice}
            options={prices}
            onChange={handlePriceChange}
            ref={ref => (priceRef.current = ref)}
            styles={colorStyles(125)}
            placeholder="To $"
          />
        </Label>
      </BrandWrapper>

      <MileageWrapper>
        <Label>
          Car mileage / km
          <InputMileageText>From</InputMileageText>
          <InputLeft
            type="text"
            name="mileageFrom"
            value={mileageRange.from}
            onChange={handleMileageFrom}
            autoComplete="off"
          />
        </Label>

        <Label>
          Car mileage / km
          <InputMileageText>To</InputMileageText>
          <InputRight
            type="text"
            name="mileageTo"
            value={mileageRange.to}
            onChange={handleMileageTo}
            autoComplete="off"
          />
        </Label>
      </MileageWrapper>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;

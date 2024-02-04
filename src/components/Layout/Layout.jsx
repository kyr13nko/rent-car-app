/* eslint-disable jsx-a11y/alt-text */
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import CarRentImg from '../../assets/car-rent.png';
import Loader from 'components/Loader/Loader';

import {
  Container,
  Header,
  Navigation,
  StyledLink,
  MainWrapper,
  HeaderWrapper,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <a href="/rent-car-app">
              <img src={CarRentImg} width="36" />
            </a>
            <Navigation>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/catalog">Catalog</StyledLink>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </Navigation>
          </HeaderWrapper>
        </Container>
      </Header>
      <main>
        <Container>
          <MainWrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </MainWrapper>
        </Container>
      </main>
    </>
  );
};

export default Layout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import {
  Container,
  Header,
  Logo,
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
            <Logo>Car Rent App</Logo>
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

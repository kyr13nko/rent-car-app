import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-bottom: 100px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  margin-bottom: 50px;
  z-index: 10;
  color: #ffffff;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  color: #000000;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  border-radius: 12px;
  padding: 8px 16px;
  transition: background-color 0.3s ease;

  &.active {
    color: #ffffff;
    background-color: #3470ff;
    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 15px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

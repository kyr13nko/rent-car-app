import styled from 'styled-components';

import HomePageImg from '../../assets/home-page.jpg';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Background = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-image: url(${HomePageImg});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  filter: blur(2px);
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  color: #3470ff;
`;
export const Span = styled.span`
  color: #ffffff;
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

export const SpanText = styled.span`
  color: #3470ff;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: #3470ff;
  border-radius: 12px;
  padding: 8px 16px;
  transition: background-color 0.3s ease;

  color: #ffffff;
  background-color: #3470ff;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

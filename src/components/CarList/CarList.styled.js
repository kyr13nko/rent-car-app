import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 50px 29px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 274px);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 274px);
  }
`;

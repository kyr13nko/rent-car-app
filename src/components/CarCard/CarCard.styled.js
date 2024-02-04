import styled from 'styled-components';

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 274px;
  height: 274px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: none;
  cursor: pointer;
`;

export const InfoWrap = styled.div`
  width: 100%;
`;

export const TitleRaw = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #121417;
  margin: 14px 0 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 16px;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const InfoList = styled.ul`
  display: flex;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 4px;
`;

export const InfoItem = styled.li`
  display: flex;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin: 0 6px 0 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 274px;
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 99px;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  margin-top: auto;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #0b44cd;
  }
`;

import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 14px;
  background-color: #ffffff;
  width: 320px;
  height: calc(100% - 20px);
  padding: 40px 20px;

  @media screen and (min-width: 760px) {
    width: 541px;
    max-height: 752px;
    margin-top: 0;
    padding: 40px;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 248px;
  border-radius: 14px;
`;

export const InfoWrap = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
  max-height: calc(100% - 330px);
  width: 100%;
  overflow-y: scroll;

  & {
    scrollbar-width: thin;
    scrollbar-color: #0505052e transparent;
  }
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const InfoLine = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin: 0 6px 0 6px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
`;

export const InfoTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin: 24px 0 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const ConditionItem = styled.li`
  color: #363535;
  background-color: #f9f9f9;
  border-radius: 35px;
  padding: 7px 14px;
`;

export const SpanCondition = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

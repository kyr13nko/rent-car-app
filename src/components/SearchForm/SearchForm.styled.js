import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 18px;
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const MileageWrapper = styled.div`
  display: flex;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;

export const InputMileageText = styled.p`
  position: absolute;
  top: 40px;
  left: 22px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

const inputStyles = `
  width: 160px;
  padding: 13px 0 13px 88px;
  font-size: 18px;
  border: 1px solid transparent;
  background-color: #f7f7fb;
  color: #121417;
  font-weight: 500;
  line-height: 20px;
  margin-top: 8px;

  &::placeholder {
    opacity: 1;
  }

  &:hover {
    border-color: rgba(138, 138, 137, 0.5);
  }
  &:focus {
    outline: none;
    border-color: #0b44cd;
  }
`;

export const InputLeft = styled.input`
  ${inputStyles}
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  margin-left: 0px;
`;

export const InputRight = styled.input`
  ${inputStyles}
  border-radius: 0px 14px 14px 0px;
  border-left: 1px solid rgba(138, 138, 137, 0.2);
  margin-right: 0px;
`;

export const Button = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; */
  width: 136px;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  padding: 14px 44px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #0b44cd;
  }
`;

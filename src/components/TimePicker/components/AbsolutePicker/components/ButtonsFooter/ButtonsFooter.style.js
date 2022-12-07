import styled, { css } from 'styled-components';
import { textColor } from '../../../../../../theme/theme';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const saveButton = css`
  padding: 3px 12px;
  background-color: ${({ isValid }) => (isValid ? '#018FFE' : '#CFD8DC')};
  color: ${({ isValid }) => (isValid ? 'white' : '#78909C')};
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
  &:hover {
    background-color: ${({ isValid }) => (isValid ? '#309EFF' : '#CFD8DC')};
  }
  &:active {
    background-color: #0c6fdd;
  }
`;

const cancelButton = css`
  padding: 3px 12px 3px 0px;
  background-color: transparent;
  color: ${textColor};
  &:hover {
    color: #018ffe;
  }
  &:active {
    color: #212121;
  }
`;

const getColor = ({ type }) => (type === 'save' ? saveButton : cancelButton);

export const FooterButton = styled.button`
  transition: 200ms;
  height: 26px;
  border: none;
  font-family: 'TitilliumWeb';
  border-radius: 3px;
  transition: 500ms;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  ${getColor}
`;

import styled from 'styled-components';
import theme from 'styled-theming';

const tabColor = theme('mode', {
  light: '#5D5F61',
  dark: '#EEEEEE',
});

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 20px 0;
`;

export const SingleTab = styled.div`
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  width: 44px;
  font-family: ${({ isSelected }) => (isSelected ? 'TitilliumWeb-600' : 'TitilliumWeb')};
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  padding: 6px 0;
  border-radius: 5px;
  color: ${({ isSelected }) => (isSelected ? '#018FFE' : tabColor)};
  background-color: ${({ isSelected }) => isSelected && 'rgba(1, 143, 254, 0.1)'};
  transition: 300ms;
  &:hover {
    color: #018ffe;
    border: ${({ isSelected }) => !isSelected && '1px solid #018ffe'};
  }
`;

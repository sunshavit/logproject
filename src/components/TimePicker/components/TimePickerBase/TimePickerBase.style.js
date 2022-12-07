import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const dataTextColor = theme('mode', {
  light: '#757575',
  dark: '#EEEEEE',
});

const displayTextColor = theme('mode', {
  light: '#858585',
  dark: '#EEEEEE',
});

export const DateTitle = styled.div`
  color: #018ffe;
  font-family: 'TitilliumWeb';
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  user-select: none;
  transition: 300ms;
`;

export const DateText = styled.div`
  color: ${dataTextColor};
  font-family: 'TitilliumWeb';
  font-size: 12px;
  line-height: 18px;
  user-select: none;
  transition: 300ms;
`;

export const DisplayTitle = styled.div`
  color: ${displayTextColor};
  font-family: 'TitilliumWeb';
  line-height: 17px;
  user-select: none;
  font-style: normal;
  font-size: 12px;
  transition: 300ms;
`;

export const BaseWrap = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 7px;
  position: relative;
  cursor: pointer;
  &:hover {
    ${DateTitle} {
      color: #0c6fdd;
    }
    ${DateText} {
      color: #424242;
    }
    ${DisplayTitle} {
      color: #424242;
    }
  }
`;
const Svg = styled.div`
  line-height: 9px;
`;

export const ClockIcon = ({ debugId }) => (
  <Svg data-debug-id={debugId}>
    <svg width="13" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 12.025C9.55137 12.025 12.025 9.55137 12.025 6.5C12.025 3.44863 9.55137 0.975 6.5 0.975C3.44863 0.975 0.975 3.44863 0.975 6.5C0.975 9.55137 3.44863 12.025 6.5 12.025ZM6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13ZM6.30449 2.925C6.30449 2.74551 6.45 2.6 6.62949 2.6H6.95449C7.13399 2.6 7.27949 2.74551 7.27949 2.925V7.15C7.27949 7.32949 7.13399 7.475 6.95449 7.475H6.825H6.62949H4.225C4.04551 7.475 3.9 7.32949 3.9 7.15V6.825C3.9 6.64551 4.04551 6.5 4.225 6.5L6.30449 6.5V2.925Z"
        fill="#018FFE"
      />
    </svg>
  </Svg>
);

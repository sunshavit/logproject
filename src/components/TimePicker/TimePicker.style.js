import styled from 'styled-components';
import theme from 'styled-theming';

const modalBgColor = theme('mode', {
  light: 'rgba(255, 255, 255, 0.75)',
  dark: 'rgba(31, 50, 66, 0.5)',
});

const titleColor = theme('mode', {
  light: '#858585',
  dark: '#94A5B5',
});

export const TimePickerWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  .alert-exit {
    opacity: 1;
  }

  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const TimePickerModal = styled.div`
  height: fit-content;
  width: 309px;
  border-radius: 5px;
  background-color: ${modalBgColor};
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.19);
  position: absolute;
  top: 28px;
  right: -10px;
  z-index: 99;
  padding: 16px;
  -webkit-backdrop-filter: blur(46px);
  backdrop-filter: blur(46px);
  @-moz-document url-prefix() {
    background-color: white;
  }
`;

export const Title = styled.div`
  font-family: 'TitilliumWeb';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  user-select: none;
  color: ${titleColor};
`;

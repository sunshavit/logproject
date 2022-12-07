import styled from 'styled-components';
import theme from 'styled-theming';

const calenderBgColor = theme('mode', {
  light: 'white',
  dark: 'rgba(31, 50, 66, 1)',
});

const arrowColor = theme('mode', {
  light: 'rgba(133, 133, 133, 0.6)',
  dark: '#EEEEEE',
});

const dayColor = theme('mode', {
  light: '#5d5f61',
  dark: '#EEEEEE',
});

const disabledDayColor = theme('mode', {
  light: '#9a9c9d',
  dark: '#49667F',
});

const weekDayColor = theme('mode', {
  light: '#999999',
  dark: '#94A5B5',
});

const monthTitleColor = theme('mode', {
  light: '#5d5f61',
  dark: ' #EEEEEE',
});

const monthHoverBg = theme('mode', {
  light: 'rgba(0, 0, 0, 0.03)',
  dark: 'rgba(59, 90, 120, 0.75)',
});

const calenderTitle = theme('mode', {
  light: '#3C4144',
  dark: '#94A5B5',
});

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 18px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const CalenderModal = styled.div`
  .rdtPicker th.rdtSwitch {
    &:hover {
      background-color: ${monthHoverBg};
      border-radius: 5px;
    }
  }
  height: fit-content;
  padding: 15px;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  position: absolute;
  background-color: ${calenderBgColor};
  width: 286px;
  top: 55px;
  left: ${({ modalOffset }) => `calc(50% - ${modalOffset}px)`};
  transform: translate(-50%);
  table {
    border-collapse: separate;
    border-spacing: 0px 6px;
  }
  .rdtPicker {
    font-family: 'TitilliumWeb';
    padding: 0;
    width: 100%;
    border: none;
    border-bottom: none;
    background-color: transparent;
    color: ${monthTitleColor};

    th {
      border-bottom: none !important;
    }
  }
  //** month title  */

  .rdtSwitch {
    font-family: 'TitilliumWeb';
    font-size: 14px;
    line-height: 20px;
    color: #5d5f61;
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03) !important;
      border-radius: 5px;
    }
  }
  .rdtNext {
    span {
      margin-left: 5px;
    }
  }

  .rdtPrev {
    span {
      margin-right: 5px;
    }
  }

  .rdtNext,
  .rdtPrev {
    color: ${arrowColor};
    span {
      font-size: 20px;
    }
    &:hover {
      background-color: transparent !important;
      color: #018ffe;
      &:active {
        color: #0c6fdd;
      }
    }
    &:active {
      color: #212121;
    }
  }

  .dow {
    font-family: 'TitilliumWeb';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${weekDayColor};
  }
  .rdtMonth,
  .rdtYear {
    height: 30px;
  }
  .rdtDay {
    width: 26px !important;
    height: 26px !important;
  }
  .rdtDay,
  .rdtMonth,
  .rdtYear {
    font-family: 'TitilliumWeb';
    user-select: none;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${dayColor};
    border-radius: 5px !important;
    outline: 0px solid transparent;
    transition: 200ms;
    &:hover {
      color: #018ffe;
      outline: 1px solid #018ffe;
      border-radius: 5px !important;
      background-color: transparent !important;
    }
    &.rdtToday {
      ::before {
        border-bottom: 7px solid #018ffe;
      }
    }
    &.rdtActive {
      font-family: 'TitilliumWeb';
      color: #018ffe;
      background-color: rgba(1, 143, 254, 0.1);
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      border-radius: 5px;
      text-shadow: none;
      &:hover {
        color: #018ffe;
        border-radius: 5px !important;
        background-color: rgba(1, 143, 254, 0.1) !important;
        text-shadow: none;
        outline: none;
      }
    }
    &.rdtDisabled {
      font-family: 'TitilliumWeb';
      color: ${disabledDayColor};
      font-weight: 400;
      &:hover {
        outline: none;
      }
    }
  }
  .rdtOld {
    color: ${disabledDayColor} !important;
    font-weight: 400;
  }
  .rdtTimeToggle {
    display: none;
  }
  .rdtPicker tfoot {
    border-top: 0px;
  }
`;

export const CalenderWrap = styled.div`
  height: 276px;
`;

export const CalenderTitle = styled.div`
  font-family: 'TitilliumWeb';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  user-select: none;
  color: ${calenderTitle};
`;

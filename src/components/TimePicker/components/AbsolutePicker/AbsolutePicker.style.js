import styled from "styled-components";

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
      background-color: rgba(59, 90, 120, 0.75);
      border-radius: 5px;
    }
  }
  height: fit-content;
  padding: 15px;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  position: absolute;
  background-color: rgba(31, 50, 66, 1);
  width: 286px;
  top: 55px;
  left: ${({ modalOffset }) => `calc(50% - ${modalOffset}px)`};
  transform: translate(-50%);
  table {
    border-collapse: separate;
    border-spacing: 0px 6px;
  }
  .rdtPicker {
    padding: 0;
    width: 100%;
    border: none;
    border-bottom: none;
    background-color: transparent;
    color: #eeeeee;

    th {
      border-bottom: none !important;
    }
  }
  //** month title  */

  .rdtSwitch {
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
    color: #eeeeee;
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
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #94a5b5;
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
    user-select: none;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #eeeeee;
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
      color: #49667f;
      font-weight: 400;
      &:hover {
        outline: none;
      }
    }
  }
  .rdtOld {
    color: #49667f !important;
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
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  user-select: none;
  color: #94a5b5;
`;

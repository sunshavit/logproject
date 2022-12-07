import React from "react";
import styled, { keyframes } from "styled-components";

export const ButtonText = styled.div`
  font-style: normal;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #eeeeee;
`;

export const PlusIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0658 5.56579H6.43421V0.934211C6.43421 0.694403 6.23981 0.5 6 0.5C5.7602 0.5 5.56579 0.694403 5.56579 0.934211V5.56579H0.934211C0.694403 5.56579 0.5 5.76019 0.5 6C0.5 6.23981 0.694403 6.43421 0.934211 6.43421H5.56579V11.0658C5.56579 11.3056 5.7602 11.5 6 11.5C6.23981 11.5 6.43421 11.3056 6.43421 11.0658V6.43421H11.0658C11.3056 6.43421 11.5 6.23981 11.5 6C11.5 5.76019 11.3056 5.56579 11.0658 5.56579Z"
      fill="#3C4144"
      stroke="#3C4144"
      strokeWidth="0.5"
    />
  </svg>
);

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 9px;
  margin-bottom: 9px;
  cursor: pointer;
  user-select: none;

  svg {
    path {
      stroke: #eeeeee;
      fill: #eeeeee;
    }
  }

  &:hover {
    ${ButtonText} {
      color: #018ffe;
    }
    svg {
      path {
        stroke: #018ffe;
        fill: #018ffe;
      }
    }
  }
`;

export const Clock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const Colon = styled.div`
  font-weight: 400;

  font-size: 15px;
  line-height: 20px;
  color: #eeeeee;
`;

export const ClockInput = styled.input`
  width: 32px;
  height: 32px;
  line-height: 32px;

  text-align: center;
  background-color: rgba(59, 90, 120, 0.75);
  color: #eeeeee;
  border-radius: 5px;
  border: none;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    background-color: rgba(1, 143, 254, 0.1);
    color: #018ffe;
  }
  &:focus {
    outline: none;
    background-color: rgba(1, 143, 254, 0.1);
    color: #018ffe;
    font-weight: 700;
  }
`;

export const AddTimeContainer = styled.div`
  height: ${({ withClock }) => (withClock ? "44px" : "33px")};
  transition: height 200ms ease;
  display: flex;
  align-items: flex-start;
  margin-top: ${({ withClock }) => (withClock ? "5px" : "3px")};
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
    opacity: 1;
}
`;

export const ClockContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 300ms ease-out;
`;

export const RemoveTime = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  line-height: 18px;
  color: #eeeeee;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #018ffe;
  }
`;

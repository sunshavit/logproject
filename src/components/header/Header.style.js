import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Label = styled.label`
  width: 100%;
  .file-input {
    width: 300px;
    height: 36px;
    border: ${({ isFileSelected }) =>
      isFileSelected ? "1px solid #309eff" : "1px solid #617a90"};
    background: #1f3242;
    border-radius: 5px;
    color: #eeeeee;
    padding: 8px 10px;
    outline: none;
    position: relative;
    cursor: pointer;

    &:hover {
      border: 1px solid #309eff;
      svg {
        fill: #309eff;
      }
    }
    &:focus {
      border: 1px solid #309eff;
    }
    svg {
      position: absolute;
      top: 6px;
      right: 5px;
      fill: ${({ isFileSelected }) => (isFileSelected ? "#309eff" : "#617a90")};
    }
  }
  input {
    display: none;
  }
`;

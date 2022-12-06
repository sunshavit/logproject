import styled from "styled-components";

export const Button = styled.button`
  background: #018ffe;
  color: white;
  border-radius: 5px;
  padding: 3px 14px;
  height: 36px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #309eff;
  }

  svg {
    margin-inline-end: 8px;
    width: 20px;
    display: inline-block;
    /* position: relative; */
    vertical-align: middle;
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  background: #018ffe;
  color: white;
  border-radius: 5px;
  padding: 3px 14px;
  width: 95px;
  height: 36px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #309eff;
  }

  &:focus {
    background: #50b0ff;
  }
`;

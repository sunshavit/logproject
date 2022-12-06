import styled from "styled-components";

export const TextField = styled.input`
  width: 300px;
  height: 36px;
  background: #1f3242;
  border: 1px solid #617a90;
  border-radius: 5px;
  color: #eeeeee;
  padding: 10px;
  outline: none;
  &::placeholder {
    color: #617a90;
  }
  &:hover {
    border: 1px solid #309eff;
  }
  &:focus {
    border: 1px solid #309eff;
  }
`;

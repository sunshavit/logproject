import styled, { css } from "styled-components";

// Variants: basic, outline

function getCssByVariant({ variant = "basic" }) {
  if (variant === "outline")
    return css`
      color: #018ffe;
      background: transparent;
      &:hover {
        border: 1px solid #309eff;
        color: #309eff;
      }
    `;

  return css`
    color: white;
    background: #018ffe;
    &:hover {
      background: #309eff;
    }
  `;
}

export const Button = styled.button`
  border: 1px solid #018ffe;
  border-radius: 5px;
  padding: 3px 14px;
  height: 36px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${getCssByVariant}
  svg {
    margin-inline-end: 8px;
    width: 20px;
    display: inline-block;
    /* position: relative; */
    vertical-align: middle;
  }
`;

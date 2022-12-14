import styled from "styled-components";

const setColor = ({ isOpen, disabled }) => {
  if (disabled) return "#9E9E9E";
  if (isOpen) return "#018FFE";
  return "#EEEEEE";
};

export const Input = styled.input`
  width: 126px;
  height: 26px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(1, 143, 254, 0.1)" : "rgba(59, 90, 120, 0.75)"};
  border-radius: 5px;
  border: none;
  color: ${setColor};
  font-weight: ${({ isOpen }) => (isOpen ? "700" : "400")};

  text-align: center;
  line-height: 28px;
  font-size: 12px;
  &:hover {
    color: ${({ disabled }) => !disabled && "#018ffe"};
  }
  &:focus {
    outline: none;
  }
`;

export const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Label = styled.label`
  text-transform: capitalize;

  font-size: 12px;
  line-height: 16px;
  user-select: none;
  margin-left: 1px;
  color: #eeeeee;
`;

export const AutomationInput = styled.input`
  width: 140px;
  height: 26px;
  cursor: pointer;
  background-color: rgba(245, 245, 245, 0.75);
  border-radius: 5px;
  border: none;
  color: #018ffe;
  font-weight: 400;

  text-align: center;
  line-height: 28px;
  font-size: 10px;
  &:hover {
    color: #018ffe;
  }
  &:focus {
    outline: none;
  }
`;

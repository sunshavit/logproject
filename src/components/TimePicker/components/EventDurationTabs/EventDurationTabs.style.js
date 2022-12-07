import styled from "styled-components";

export const EventTabsContainer = styled.div`
  display: flex;
  padding: 10px 0 20px 0;
`;

export const EventSingleTab = styled.div`
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  width: 98px;

  font-style: normal;
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "400")};
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  padding: 6px 0;
  border-radius: 5px;
  color: ${({ isSelected }) => (isSelected ? "#018FFE" : "#EEEEEE")};
  background-color: ${({ isSelected }) =>
    isSelected && "rgba(1, 143, 254, 0.1)"};
  transition: 300ms;
  &:hover {
    color: #018ffe;
    border: ${({ isSelected }) => !isSelected && "1px solid #018ffe"};
  }
`;

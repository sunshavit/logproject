import styled from "styled-components";

const Container = styled.div`
  display: flex;
  cursor: pointer;
  > div {
    display: inline-block;
  }
  .trigger {
    margin-inline-end: 10px;
    width: 5px;
    height: 25px;
    border-radius: 2px;
    background: ${(props) => props.color};
  }
  .text {
    line-height: 22px;
  }
`;

export const LegendWrapper = styled.div`
  width: ${(props) => (props.isRow ? "initial" : "200px")};
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  justify-content: center;
  flex-wrap: wrap;
  > div {
    margin-inline-end: 20px;
    margin-block: 10px;
  }
`;

export function Legend({ text, color }) {
  return (
    <Container color={color}>
      <div className="trigger"></div>
      <div className="text">{text}</div>
    </Container>
  );
}

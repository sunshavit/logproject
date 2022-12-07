import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 15px 0px;
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

export function Legend({ text, color }) {
  return (
    <Container color={color}>
      <div className="trigger"></div>
      <div className="text">{text}</div>
    </Container>
  );
}

import React from "react";
import { Button } from "../inputs/button.style";
import TimePicker from "../TimePicker/TimePicker";
import { ButtonsRowWrap, Container } from "./ButtonsRow.style";

const ButtonsRow = () => {
  const setTimFrame = () => {};
  return (
    <Container>
      <ButtonsRowWrap>
        <Button> Auto check Profile</Button>
        <Button> Graphana</Button>
        <Button> Support File Logs</Button>
        <Button> Index Modal</Button>
      </ButtonsRowWrap>
      <TimePicker getTimeFrame={setTimFrame} />
    </Container>
  );
};

export default ButtonsRow;

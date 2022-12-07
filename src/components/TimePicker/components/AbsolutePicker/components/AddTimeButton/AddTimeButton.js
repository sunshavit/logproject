import React from 'react';
import * as Styled from './AddTime.style';

const AddTime = ({ value, setClockVisible, setTime, input, setClockHide }) => (
  <Styled.AddTimeContainer withClock={value !== null}>
    {!value ? (
      <Styled.AddButton data-debug-id="add-time-button" onClick={setClockVisible}>
        <Styled.PlusIcon />
        <Styled.ButtonText>Add time</Styled.ButtonText>
      </Styled.AddButton>
    ) : (
      <Styled.ClockContainer data-debug-id="add-time-clock">
        <Styled.Clock tabIndex="0">
          <Styled.ClockInput
            onChange={e => setTime(e, input, 'hours')}
            value={`0${value.hour}`.slice(-2)}
            type="text"
          />
          <Styled.Colon>:</Styled.Colon>
          <Styled.ClockInput
            type="text"
            value={`0${value.minutes}`.slice(-2)}
            onChange={e => setTime(e, input, 'minutes')}
          />
        </Styled.Clock>
        <Styled.RemoveTime onClick={setClockHide}>Remove time</Styled.RemoveTime>
      </Styled.ClockContainer>
    )}
  </Styled.AddTimeContainer>
);
export default AddTime;

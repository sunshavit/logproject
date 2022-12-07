import React from 'react';
import { BaseWrap, DateTitle, DateText, ClockIcon, DisplayTitle } from './TimePickerBase.style';
import { getDate } from '../../utils';

const TimePickerBase = ({ handleOpen, selectedTimeFrame, dateFormat }) => {
  const { fromDate, toDate, display, type } = selectedTimeFrame;

  return (
    <BaseWrap id="pickerBase" tabIndex="0" onClick={handleOpen}>
      <ClockIcon debugId="time-date-filter-clock-trigger" />
      {type === 'quickRange' || type === 'eventDuration' ? (
        <DisplayTitle>{display}</DisplayTitle>
      ) : (
        <>
          <DateTitle>From</DateTitle>
          <DateText>{getDate(fromDate, dateFormat)}</DateText>

          <DateTitle>To</DateTitle>
          <DateText>{getDate(toDate, dateFormat)}</DateText>
        </>
      )}
    </BaseWrap>
  );
};

export default TimePickerBase;

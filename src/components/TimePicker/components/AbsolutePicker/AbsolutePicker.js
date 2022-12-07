import React, { useEffect, useState, createRef } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {
  CalenderModal,
  InputWrapper,
  InputsContainer,
  CalenderWrap,
  CalenderTitle,
} from './AbsolutePicker.style';

import ButtonsFooter from './components/ButtonsFooter/ButtonsFooter';
import DateInput from './components/DateInput/DateInput';
import { setDateHour, getHour, isDateValid } from '../../utils';
import AddTime from './components/AddTimeButton/AddTimeButton';

const inputs = ['from', 'to'];

const AbsolutePicker = ({
  onApply,
  onTimePickerCancel,
  dateSelectRef,
  selectedTimeFrame,
  dateFormat,
  disabled,
}) => {
  const [calenderRef, setCalenderRef] = useState([]);

  const [isCalenderOpen, setIsCalenderOpen] = useState({
    from: false,
    to: false,
  });

  const [absoluteTimeFrame, setAbsoluteTimeFrame] = useState({
    from: { date: selectedTimeFrame.fromDate, clock: null },
    to: { date: selectedTimeFrame.toDate, clock: null },
  });

  const [modalOffset, setModalOffset] = useState(0);

  useEffect(() => {
    setAbsoluteTimeFrame({
      from: { date: selectedTimeFrame.fromDate, clock: null },
      to: { date: selectedTimeFrame.toDate, clock: null },
    });
  }, [selectedTimeFrame]);

  const openCalender = inputName => {
    setIsCalenderOpen(prev => ({ ...prev, [inputName]: true }));
  };

  useEffect(() => {
    setCalenderRef(inputs.map(() => createRef()));
  }, [inputs]);

  useEffect(() => {
    const openCalenderRef = calenderRef.filter(ref => ref.current);
    if (openCalenderRef.length) {
      openCalenderRef[0].current.focus();

      if (window.innerWidth - openCalenderRef[0].current.getBoundingClientRect().right < 0) {
        setModalOffset(
          Math.abs(window.innerWidth - openCalenderRef[0].current.getBoundingClientRect().right) +
            20
        );
      }
    }
  }, [isCalenderOpen]);

  const handleDatePick = (date, input) => {
    setAbsoluteTimeFrame(prev => {
      const pickedDate = setDateHour(date, prev[input].clock);
      return { ...prev, [input]: { ...prev[input], date: pickedDate } };
    });
  };

  const closeCalender = (event, inputName) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsCalenderOpen(prev => ({
        ...prev,
        [inputName]: false,
      }));
      setModalOffset(0);
    }
  };
  const setTime = (event, input, timeType) => {
    const { value } = event.target;
    if (timeType === 'hours' && value <= 23) {
      setAbsoluteTimeFrame(prev => ({
        ...prev,
        [input]: {
          date: setDateHour(prev[input].date, { ...prev[input].clock, hour: value }),
          clock: { ...prev[input].clock, hour: value },
        },
      }));
    }
    if (timeType === 'minutes' && value <= 59) {
      setAbsoluteTimeFrame(prev => ({
        ...prev,
        [input]: {
          date: setDateHour(prev[input].date, { ...prev[input].clock, minutes: value }),
          clock: { ...prev[input].clock, minutes: value },
        },
      }));
    }
  };

  const onClockVisible = input => {
    const { hour, minutes } = getHour();
    setAbsoluteTimeFrame(prev => ({
      ...prev,
      [input]: { ...prev[input], clock: { hour, minutes } },
    }));
  };

  const onClockHide = input => {
    setAbsoluteTimeFrame(prev => ({ ...prev, [input]: { ...prev[input], clock: null } }));
  };

  const isValidDate = current => current < Date.now();

  const onCalenderCancel = input => {
    setAbsoluteTimeFrame(prev => ({
      ...prev,
      [input]: { date: Date.now(), clock: null },
    }));
    setIsCalenderOpen(prev => ({ ...prev, [input]: false }));
    dateSelectRef?.current?.focus();
  };

  const onCalenderSave = input => {
    // only close the calender,the state is already saved but set the time picker into focus again
    setIsCalenderOpen(prev => ({ ...prev, [input]: false }));
    dateSelectRef?.current?.focus();
  };

  const setAutomationTimeFrame = (timeFrame, input) => {
    setAbsoluteTimeFrame(prev => ({ ...prev, [input]: { date: timeFrame } }));
  };

  const isValidApply = isDateValid(absoluteTimeFrame);

  return (
    <>
      <InputsContainer>
        {inputs.map((input, i) => (
          <InputWrapper key={input}>
            <DateInput
              disabled={disabled}
              setAutomationTimeFrame={setAutomationTimeFrame}
              dateFormat={dateFormat}
              value={absoluteTimeFrame[input].date}
              label={input}
              isOpen={isCalenderOpen[input]}
              inputName={input}
              openCalender={openCalender}
            />
            {isCalenderOpen[input] && (
              <CalenderModal
                onBlur={e => closeCalender(e, input)}
                ref={calenderRef[i]}
                modalOffset={modalOffset}
                tabIndex="0"
                data-debug-id={`calender-modal-open-${input}`}
              >
                <CalenderTitle>Time Range</CalenderTitle>
                <CalenderWrap>
                  <Datetime
                    input={false}
                    onChange={date => handleDatePick(date, input)}
                    value={absoluteTimeFrame[input].date}
                    isValidDate={isValidDate}
                  />
                </CalenderWrap>
                <AddTime
                  value={absoluteTimeFrame[input].clock}
                  setClockVisible={() => onClockVisible(input)}
                  setClockHide={() => onClockHide(input)}
                  setTime={setTime}
                  input={input}
                  closeCalender={closeCalender}
                />
                <ButtonsFooter
                  isValid
                  onCancel={() => onCalenderCancel(input)}
                  onSave={() => onCalenderSave(input)}
                  calenderFooter
                />
              </CalenderModal>
            )}
          </InputWrapper>
        ))}
      </InputsContainer>
      <ButtonsFooter
        isValid={isValidApply}
        saveButtonText="Apply"
        onSave={() => isValidApply && onApply(absoluteTimeFrame)}
        onCancel={() => onTimePickerCancel()}
      />
    </>
  );
};

export default AbsolutePicker;

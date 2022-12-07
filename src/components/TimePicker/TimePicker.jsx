import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import QuickTabs from "./components/QuickTabs/QuickTabs";
import TimePickerBase from "./components/TimePickerBase/TimePickerBase";
import * as Styled from "./TimePicker.style";
import AbsolutePicker from "./components/AbsolutePicker/AbsolutePicker";
import { setDefaultTime, setFrom } from "./utils";
import EventDurationTabs from "./components/EventDurationTabs/EventDurationTabs";

const TimePicker = ({
  getTimeFrame,
  dateFormat = "MM.dd.yyyy",
  eventDuration = null,
  primaryTime,
}) => {
  const automationFlag = sessionStorage.getItem("automationFlag");

  const defaultType = eventDuration ? "eventDuration" : "quickRange";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(() =>
    setDefaultTime(eventDuration, primaryTime)
  );
  const [pickerType, setPickerType] = useState(defaultType);

  const dateSelectRef = useRef();
  useEffect(() => {
    if (isOpen) {
      dateSelectRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    getTimeFrame(selectedTimeFrame);
    setIsOpen(false);
  }, [selectedTimeFrame]);

  const handleQuickTime = (timeFrame) => {
    setSelectedTimeFrame({
      ...timeFrame,
      fromDate: setFrom(timeFrame),
      toDate: Date.now(),
    });
  };

  const handleBlur = (event) => {
    event.persist();
    if (!automationFlag) {
      if (event.relatedTarget?.id === "pickerBase") return;
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setIsOpen(false);
        setPickerType(selectedTimeFrame.type);
      }
    }
  };
  const onApply = (timeFrame) => {
    const { from, to } = timeFrame;
    if (pickerType === "eventDuration") {
      return setSelectedTimeFrame({
        fromDate: eventDuration.fromDate,
        toDate: eventDuration.toDate,
        display: "Event Duration",
        type: "eventDuration",
      });
    }
    return setSelectedTimeFrame({
      fromDate: from.date,
      toDate: to.date,
      type: "timeRange",
    });
  };

  const onTimePickerCancel = () => {
    setIsOpen(false);
    setPickerType(selectedTimeFrame.type);
  };

  const handleEventTabChange = (tab) => {
    const { id } = tab;
    if (id === "eventDuration") {
      return setPickerType("eventDuration");
    }
    return setPickerType("timeRange");
  };

  const timePickerTitle = eventDuration ? "Select Time Frame" : "Quick Range";

  return (
    <Styled.TimePickerWrap>
      <TimePickerBase
        dateFormat={dateFormat}
        selectedTimeFrame={selectedTimeFrame}
        handleOpen={() => setIsOpen((prev) => !prev)}
      />
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="alert"
        unmountOnExit
        appear
      >
        <Styled.TimePickerModal
          ref={dateSelectRef}
          tabIndex="0"
          onBlur={(e) => handleBlur(e)}
        >
          <Styled.Title>{timePickerTitle}</Styled.Title>
          {eventDuration ? (
            <EventDurationTabs
              handleEventTabChange={handleEventTabChange}
              pickerType={pickerType}
            />
          ) : (
            <QuickTabs
              handleQuickTime={handleQuickTime}
              selectedTimeFrame={selectedTimeFrame}
            />
          )}

          <Styled.Title>Time Range</Styled.Title>
          <AbsolutePicker
            disabled={pickerType === "eventDuration"}
            dateFormat={dateFormat}
            selectedTimeFrame={selectedTimeFrame}
            onApply={onApply}
            onTimePickerCancel={onTimePickerCancel}
            dateSelectRef={dateSelectRef}
          />
        </Styled.TimePickerModal>
      </CSSTransition>
    </Styled.TimePickerWrap>
  );
};

export default TimePicker;

import React from 'react';
import { Input, InputWithLabel, Label, AutomationInput } from './DateInput.style';
import { getDate } from '../../../../utils';

const DateInput = ({
  label,
  openCalender,
  inputName,
  isOpen,
  value,
  dateFormat,
  setAutomationTimeFrame,
  disabled,
}) => {
  const handelChange = e => {
    const { value } = e.target;
    const toTimeStamp = Date.parse(value);
    setAutomationTimeFrame(toTimeStamp, inputName);
  };
  const automationFlag = sessionStorage.getItem('automationFlag');
  return (
    <InputWithLabel>
      <Label htmlFor={label}>{label}</Label>
      {automationFlag ? (
        <AutomationInput
          data-debug-id={`absoluteInput_${inputName}`}
          step="1"
          type="datetime-local"
          onChange={handelChange}
          required
        />
      ) : (
        <Input
          disabled={disabled}
          id={label}
          value={getDate(value, dateFormat)}
          isOpen={isOpen}
          onClick={() => !disabled && openCalender(inputName)}
          readOnly
        />
      )}
    </InputWithLabel>
  );
};

export default DateInput;

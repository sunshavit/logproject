import React from 'react';
import { FooterContainer, FooterButton } from './ButtonsFooter.style';

const ButtonsFooter = ({ onCancel, onSave, saveButtonText, isValid, calenderFooter }) => (
  <FooterContainer calenderFooter={calenderFooter}>
    <FooterButton onClick={onCancel}>Cancel</FooterButton>
    <FooterButton data-debug-id="button_" isValid={isValid} onClick={onSave} type="save">
      {saveButtonText || 'Save'}
    </FooterButton>
  </FooterContainer>
);

export default ButtonsFooter;

import React from 'react';
import { StyledButton } from '../StyledProps.js';

const NextButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Següent</StyledButton>;
}

export default NextButton;
import React from 'react';
import { StyledButton } from '../StyledProps.js';

const PreviousButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Anterior</StyledButton>;
}

export default PreviousButton;

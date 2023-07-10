import React from 'react';
import { StyledStartButton } from '../StyledProps.js';

const StartButton = ({ onClick }) => {
  return <StyledStartButton onClick={onClick}>Start</StyledStartButton>;
}

export default StartButton;
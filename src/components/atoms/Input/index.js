import React from 'react';
import { Text, Button } from './components';

const renderInput = type => {
  switch(type) {
    case 'text':
      return <Text />
    case 'submit':
      return <Button />
    default:
      return null;
  }
};

const Input = ({ type }) => renderInput(type);

export default Input;

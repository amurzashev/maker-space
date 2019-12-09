import React from 'react';
import { Text, Button } from './components';

const renderInput = ({ type, ...props }) => {
  switch(type) {
    case 'text':
      return <Text {...props} />
    case 'submit':
      return <Button {...props} />
    default:
      return null;
  }
};

const Input = props => renderInput(props);

export default Input;

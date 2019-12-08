import React from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

function CreateToDo(props) {
  const { onFormSubmit, value, onInputChange } = props;
  return (
    <form onSubmit={onFormSubmit}>
      <TextInput value={value} onChange={onInputChange} />
      <Button>ADD</Button>
    </form>
  )
}

export default CreateToDo;

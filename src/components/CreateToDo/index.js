import React from 'react';

function CreateToDo(props) {
  const { onFormSubmit, value, onInputChange } = props;
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={value} onChange={onInputChange} />
      <input type="submit" />
    </form>
  )
}

export default CreateToDo;

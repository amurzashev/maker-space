import React, { useState } from 'react';
import StyledForm from '../../molecules/StyledForm';
import { Input, ToDoItem } from '../../atoms';

const NewToDo = ({ onFormSubmit, onInputChange, value }) => {
  const textInputProps = {
    type: 'text',
    autoFocus: true,
    onChange: onInputChange,
    placeholder: 'Add new task',
    value,
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input {...textInputProps} />
      <Input type="submit">Add task</Input>
    </StyledForm>
  );
};

const ToDoList = () => (
  <ToDoItem>Hello world</ToDoItem>
);

const Home = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function onFormSubmit (e) {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue('');
  };

  function onInputChange (e) {
    setValue(e.target.value);
  };

  const todoProps = {
    onInputChange,
    onFormSubmit,
    value,
  };

  return (
    <>
      <NewToDo {...todoProps} />
      <ToDoList />
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import { StyledForm, ListWrapper } from '../../molecules';
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

// TODO: use memo to prevent rerender

const ToDoList = ({ todos }) => {
  if (todos.length === 0) {
    return <h1>no items yet!</h1>
  } else {
    return (
      <ListWrapper>
        {todos.map(todo => <ToDoItem key={`${todo}${Math.random()}`}>{todo}</ToDoItem>)}
      </ListWrapper>
    )
  }
};

// TODO: input error handling on empty value

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
      <ToDoList todos={todos} />
    </>
  );
};

export default Home;

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

const ToDoList = ({ todos, crossToDo }) => {
  if (todos.length === 0) {
    return <h1>no items yet!</h1>
  } else {
    return (
      <ListWrapper>
        {todos.map((todo, index) => <ToDoItem key={`${todo.value}${Math.random()}`} isCrossed={todo.isCrossed} onClick={() => crossToDo(index)}>{todo.value}</ToDoItem>)}
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
    if (!value) {
      alert("Can't be empty");
    } else {
      setTodos([...todos, { value, isCrossed: false }]);
      setValue('');
    }
  };

  function onInputChange (e) {
    setValue(e.target.value);
  };

  function crossToDo (index) {
    alert(`my idnex is ${index}`);
  }

  const todoProps = {
    onInputChange,
    onFormSubmit,
    value,
  };

  return (
    <>
      <NewToDo {...todoProps} />
      <ToDoList todos={todos} crossToDo={crossToDo} />
    </>
  );
};

export default Home;

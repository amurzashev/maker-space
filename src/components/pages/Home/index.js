import React, { useState, memo } from 'react';
import { StyledForm, ListWrapper } from '../../molecules';
import { Input, ToDoItem } from '../../atoms';
import styled from '@emotion/styled';

/**
 * Sun 15 plan
 * objects and syntax obj[const] obj.const || 'default' etc.. props = {...a, props};
 * styled component - error handling
 * onclick turn all to crossed out back and forth
 * /about page
 * hocs - basic! authentication
 * styleguidist documentation?
 */

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

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ToDoList = memo(({ todos, crossToDo, deleteToDo }) => {
  console.log('render');
  if (todos.length === 0) {
    return null;
  } else {
    return (
      <ListWrapper>
        {todos.map((todo, index) => (
          <Wrap key={todo.key}>
            <ToDoItem
              isCrossed={todo.isCrossed}
              onClick={() => crossToDo(index)}
            >
              {todo.value}
            </ToDoItem>
            <Input type="submit" color="primary">
              delete item
            </Input>
          </Wrap>
        ))}
      </ListWrapper>
    )
  }
  // heads up: this should not work, but it does
}, (prevProps, nextProps) => prevProps.todos === nextProps.todos); // have to manually tell react to check todos array

// TODO: input error handling on empty value using Styled Components

const AppWrap = styled.div`
  max-width: 800px;
  margin: 60px auto;
`;

const Home = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function onFormSubmit (e) {
    e.preventDefault();
    if (!value) {
      alert("Can't be empty");
    } else {
      const todo = {
        value,
        isCrossed: false,
        key: `${value}${Math.random().toFixed(4)}`,
      };
      setTodos([...todos, todo]);
      setValue('');
    }
  };

  function onInputChange (e) {
    setValue(e.target.value);
  };

  function crossToDo (index) {
    const oldToDos = [...todos];
    oldToDos[index].isCrossed = !oldToDos[index].isCrossed;
    setTodos(oldToDos);
  };

  function deleteToDo () {

  };

  const newTodoProps = {
    onInputChange,
    onFormSubmit,
    value,
  };

  const todoListProps = {
    todos,
    crossToDo,
    deleteToDo,
  };

  return (
    <AppWrap>
      <NewToDo {...newTodoProps} />
      <ToDoList {...todoListProps} />
    </AppWrap>
  );
};

export default Home;

/**
 * tic tac toe - Darkhan
 * calculator - Daniyar
 * instagram - 
 * reddit - Merei
 * real time chat - Erkebulan
 * weather website - Togzhan
 * advanced money converter - 
 * simplified trello(notion) -
 * classifieds site -
 */
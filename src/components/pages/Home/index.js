import React, { useState, memo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { StyledForm, ListWrapper } from '../../molecules';
import { Input, ToDoItem } from '../../atoms';

/**
 * Sun 15 plan
 * objects and syntax obj[const] obj.const || 'default' etc.. props = {...a, props};
 * styled component - error handling
 * onclick turn all to crossed out back and forth
 * /about page
 * styleguidist documentation?
 * hocs - basic! authentication
 */

/**
  * input - regex whitespaces
  */

const StyledInputText = styled(Input)`
  flex: 0.8;
  box-sizing: border-box;
  border: 0;
  ${props => props.inputError ? `
    border-bottom: 1px solid red;
  ` : `
    border-bottom: 1px solid ${props.theme.colors.secondary};
  `};
`;

const StyledInputSubmit = styled(Input)`
  flex: 0.2;
  ${props => props.inputError ? `
    background-color: red;
  ` : ``}
 `;

const NewToDo = ({
  onFormSubmit, onInputChange, value, inputError,
}) => {
  const textInputProps = {
    type: 'text',
    autoFocus: true,
    onChange: onInputChange,
    placeholder: 'Add new task',
    value,
    inputError,
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <p>{inputError}</p>
      <StyledInputText {...textInputProps} />
      <StyledInputSubmit type="submit" inputError={inputError}>Add task</StyledInputSubmit>
    </StyledForm>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledToDoItem = styled(ToDoItem)`
  flex: 0.8;
`;

const ToDoList = memo(({ todos, crossToDo, deleteToDo }) => {
  if (todos.length === 0) {
    return null;
  }
  return (
    <ListWrapper>
      {todos.map((todo, index) => (
        <Wrap key={todo.key}>
          <StyledToDoItem
            isCrossed={todo.isCrossed}
            onClick={() => crossToDo(index)}
          >
            {todo.value}
          </StyledToDoItem>
          <StyledInputSubmit type="submit" color="primary" onClick={() => deleteToDo(index)}>
            Delete item
          </StyledInputSubmit>
        </Wrap>
      ))}
    </ListWrapper>
  );
  // heads up: this should not work, but it does
}, (prevProps, nextProps) => prevProps.todos === nextProps.todos); // have to manually tell react to check todos array

// TODO: input error handling on empty value using Styled Components

const AppWrap = styled.div`
  max-width: 600px;
  margin: 60px auto;
`;

const Home = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [inputError, setInputError] = useState('');

  function onFormSubmit (e) {
    e.preventDefault();
    if (!value) {
      setInputError('Can not be empty');
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

  function onInputChange(e) {
    setValue(e.target.value);
    if (inputError) {
      setInputError('');
    }
  }

  function crossToDo(index) {
    const oldToDos = [...todos];
    oldToDos[index].isCrossed = !oldToDos[index].isCrossed;
    setTodos(oldToDos);
  }

  function deleteToDo(index) {
    const firstHalf = todos.slice(0, index);
    const secondHalf = todos.slice(index + 1, todos.length);
    setTodos([...firstHalf, ...secondHalf]);
  }

  const newTodoProps = {
    onInputChange,
    onFormSubmit,
    value,
    inputError,
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

ToDoList.propTypes = {
  todos: PropTypes.shape({
    value: PropTypes.string.isRequired,
    isCrossed: PropTypes.bool.isRequired,
  }).isRequired,
  crossToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

NewToDo.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputError: PropTypes.string,
};

NewToDo.defaultProps = {
  inputError: '',
};

export default Home;

/**
 * tic tac toe - Darkhan
 * calculator - Daniyar
 * instagram - Eugene
 * reddit - Merei
 * real time chat - Erkebulan
 * weather website - Togzhan
 * simplified trello(notion) - Aigul
 * advanced money converter - Maxat
 * classifieds site -
 * fake shop with cart - 
 */
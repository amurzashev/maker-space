import React from 'react';
import './App.css';

function CreateToDo(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <input type="text" value={props.value} onChange={props.onInputChange} />
      <input type="submit" />
    </form>
  )
}

function ShowToDos (props) {
  return props.todos.length === 0 ? <h1>empty</h1> : (
    <div>
      {props.todos.map(el => <p>{el}</p>)}
    </div>
  );
}

function App() {
  const [value, setValue] = React.useState('hello');
  const [todos, setTodos] = React.useState([]);
  function onFormSubmit (e) {
    e.preventDefault();
    setTodos([...todos, value]);
  }
  function onInputChange (e) {
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>my to do list</h1>
        <CreateToDo value={value} onFormSubmit={onFormSubmit} onInputChange={onInputChange}  />
        <ShowToDos todos={todos} />
      </header>
    </div>
  );
}

export default App;

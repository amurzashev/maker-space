import React from 'react';
import './App.css';
import CreateToDo from './components/CreateToDo';
import ShowToDos from './components/ShowToDos';

function App() {
  const [value, setValue] = React.useState('hello');
  const [todos, setTodos] = React.useState([]);
  function onFormSubmit (e) {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue('');
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

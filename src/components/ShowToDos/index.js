import React from 'react';

function ShowToDos ({ todos }) {
  return todos.length === 0 ? <h1>empty</h1> : (
    <div>
      {todos.map(el => <p>{el}</p>)}
    </div>
  );
};

export default ShowToDos;

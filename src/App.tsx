import React, { useState } from 'react';
import Todo from './Components/TodoApp/Todo';


function App() {
  
  // const toggleTodo = (selectedTodo: Todo) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo === selectedTodo) {
  //       return {
  //         ...todo,
  //         complete: !todo.complete,
  //       };
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };
  return (
    <div className="App">
     <Todo/>
    </div>
  );
}

export default App;

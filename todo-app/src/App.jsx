import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
        {
            task : 'Mata katten',
            done : false
        },
        {
            task : 'Rasta grisen',
            done : false
        },
        {
            task : 'Köpa glass',
            done : false
        },
        {
            task : 'Äta glass',
            done : false
        },
    ]);

    const handleTodoClick = (task) => {
      const updatedTodos = todos.map(todo => {
        if(todo.task !== task) {
          return todo;
        } else {
          return {
            task : todo.task,
            done : !todo.done
          }
        }
      });

      setTodos(updatedTodos);
      
    }

  return (
    <div className="app">
      <h1 className="todotitle">Todos</h1>
      <TodoList todos={ todos } handleTodoClick={ handleTodoClick } />
      <TodoForm setTodos={ setTodos } />
    </div>
  )
}

export default App;

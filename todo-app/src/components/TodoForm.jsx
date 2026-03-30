import { useState } from 'react';

const TodoForm = ({ setTodos }) => {
    const [todoInput, setTodoInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos(prev => [...prev, {
            task : todoInput,
            done : false
        }]);
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Add new todo</h2>
            <form className="todo-form">
                <input 
                    type="text" 
                    className="todo-input" 
                    onChange={ (e) => setTodoInput(e.target.value) }
                />
                <button 
                    className="todo-btn"
                    onClick={handleSubmit}
                >Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;
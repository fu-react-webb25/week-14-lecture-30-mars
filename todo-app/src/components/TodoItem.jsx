const TodoItem = ({ todo, handleTodoClick }) => {
    return (
        <li 
            className={ 
                todo.done 
                ? 'listitem listitem--done' 
                : 'listitem listitem--undone'
            }
            onClick={ () => handleTodoClick(todo.task) }
        >
            { todo.task }
        </li>
    )
}

export default TodoItem;
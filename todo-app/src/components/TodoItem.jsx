const TodoItem = ({ todo }) => {
    return (
        <li className={ 
            todo.done 
            ? 'listitem listitem--done' 
            : 'listitem listitem--undone'
        }>
            { todo.task }
        </li>
    )
}

export default TodoItem;
import React from 'react';

// Interfaces
import { Itodo } from '../interfaces';

type TodoListProps = {
    tasks: Itodo[],
    onToggle: (id: number) => void,
    onRemove: (id: number) => void,
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onRemove }) => {

    const remove = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id);
    }
    
    return (
        <ul className="collection">
            { tasks.map((todo) => {
                return <li className="todo collection-item" key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                        <span>{todo.title}</span>
                        <div className="secondary-content">
                            { todo.completed ? <i className="material-icons green-text">check_circle</i> :
                                <i className="material-icons grey-text">check_circle</i>
                            }
                            <i className="material-icons red-text" onClick={event => remove(event, todo.id)}>delete</i>
                        </div>
                    </label>
                </li>
            }) }
            
        </ul>
    );
}

export default TodoList;
import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>('');
    const onTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const onKeyTitle = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            const val = event.currentTarget.getAttribute('value');
            props.onAdd(val!)
            setTitle('');
        }
    }
    return (
        <div className="input-field">
            <input 
                onChange={onTitle}
                onKeyPress={onKeyTitle}
                value={ title } 
                type="text" 
                id="title" 
                placeholder="type title" 
            />
            <label htmlFor="title" className="active">type title</label>
        </div>
    );
}

export default TodoForm;
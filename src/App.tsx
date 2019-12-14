import React, { useState, useEffect } from 'react';

// Components
import NavBar from './componentrs/NavBar';
import TodoForm from './componentrs/TodoForm';
import TodoList from './componentrs/TodoList';

// Interfaces
import { Itodo } from './interfaces';

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {

  const [tasks, setTask] = useState<Itodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]') as Itodo[];
    setTask(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks) )
  }, [tasks]);

  const onAdd = (title: string) => {

    const newTask: Itodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTask(prev => [newTask, ...prev]);
  }

  const toggleHandler = (id: number) => {
    setTask(prev => prev.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldDelete = confirm('Are you shore?');
    if(shouldDelete) setTask(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h1>hello! <i className="material-icons">face</i></h1>
        <TodoForm onAdd={onAdd} />
        <TodoList tasks={tasks} onToggle={toggleHandler} onRemove={removeHandler} />
      </div>
    </div>
  );
}

export default App;

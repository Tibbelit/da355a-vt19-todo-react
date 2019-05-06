import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Todo list React style</h1>
      <h2>Todos</h2>
      <TodoList />
    </div>
  );
}

export default App;

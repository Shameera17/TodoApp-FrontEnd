import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import Header from './components/TopBar/Header';
import TodoAdd from './components/TodoAdd/TodoAdd';
function App() {
  return (
    <div className="App">
      <Header/>
      <TodoAdd/>
      <TodoList/>
    </div>
  );
}

export default App;
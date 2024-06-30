import React from 'react';
import Header from './components/Header.jsx';
import ToDoItem from './components/ToDoItem.jsx';
import "./style.css";
import Button from './components/Button.jsx';
const App=()=>{
  return(
    <div className='todo-container'>
      <Header title="ToDo"/>
      <ToDoItem text="Eat"/>
      <ToDoItem completed={true} text="Code"/>
      <ToDoItem text="play"/>
      <ToDoItem text="Study"/>
      <ToDoItem text="Sleep"/>
      <Button/>
    </div>
  );
};

export default App;

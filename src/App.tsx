import React from 'react';

import './App.css';
import Todo from './components/todo/Todo'
function App() {
  interface List{}
  const listTask=[
    {id:1,done:false, task:'Тестовое задание'},
    {id:2,done:true, task:'Прекрасный код'},
    {id:3,done:false, task:'Покрытие тестами'}
]
  return (
    <div className="App">
  <Todo listTask={listTask}/>
    </div>
  );
}

export default App;

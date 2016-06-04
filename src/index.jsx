import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

//initial tasks
const tasks = [{
  title:"Start a todo list",
  done:true
},{
  title:"Feed the dog",
  done:false
}];

ReactDOM.render(
  <Todo tasks={tasks} />,
  document.getElementById('app')
);

import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
//import MarkAllDone from './MarkAllDone';

//main 'App' wit the different elements
export default React.createClass({
  render: function(){
    return <div className="todo">
      <hr/>
      <h1>Things I need to do...</h1>
      <TaskList />
      <AddTask />
    </div>;
  }
});

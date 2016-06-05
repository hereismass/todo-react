import React from 'react';
import Task from './Task';
import AddTask from './AddTask';

export default React.createClass({
  getTasks: function(){
    return this.props.tasks || [];
  },
  render: function(){
    return <div className="todo">
      <a href="#" onClick="">Mark all as finished</a>
      <hr/>
      <h1>Things I need to do...</h1>
      <ul>
        {this.getTasks().map(task =>
          <Task task={task} key={task.title} />
        )}
      </ul>
      <AddTask />
    </div>;
  }
});

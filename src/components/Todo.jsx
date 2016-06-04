import React from 'react';

export default React.createClass({
  getTasks: function(){
    return this.props.tasks || [];
  },
  render: function(){
    return <div className="todo">
      <ul>
      {this.getTasks().map(task =>
        <li className={task.done ? "task-finished" : "task-unfinished"}>{task.title}</li>
      )}
      </ul>
    </div>;
  }
});

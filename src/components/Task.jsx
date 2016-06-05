import React from 'react';

export default React.createClass({
  render: function(){
    return <li className={this.props.task.done ? "task-finished" : "task-unfinished"}>{this.props.task.title}</li>;
  }
});

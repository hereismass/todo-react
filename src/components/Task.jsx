import React, { PropTypes } from 'react';


//Task class with task values + callback for click
const Task = ({ onClick, done, title }) => (
  <li className={done ? "task-finished" : "task-unfinished"} onClick={onClick}>
    {title}
  </li>
)

//argument validation
Task.propTypes = {
  onClick : PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Task;

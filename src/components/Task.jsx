import React, { PropTypes } from 'react';


//Task class with task values + callback for click
const Task = ({ onClick, done, title }) => (
  <li className={done ? "task-finished" : "task-unfinished"} onClick={onClick}>
    {title}
    <div className="task-check">
      <i className="fa fa-check" aria-hidden="true"></i>
    </div>
  </li>
)

//argument validation
Task.propTypes = {
  onClick : PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Task;

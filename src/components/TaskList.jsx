import React, { PropTypes } from 'react';
import { toggleTask } from '../actions';
import { connect } from 'react-redux';
import Task from './Task';

//List of tasks shown. tasks given + callback for click
const TaskList = ({ tasks, onTaskClick }) => (
  <ul>
    {tasks.map(task =>
      <Task key={task.id}
        {...task}
        onClick={() => onTaskClick(task.id)}
      />
    )}
  </ul>
)

//validation of arguments
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
}

//data from redux state to react props
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

//listener for dispatch in Task
const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => {
      dispatch(toggleTask(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

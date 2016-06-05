import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

//Part for adding a task. dispatch from redux
let AddTask = ({ dispatch }) => {
  let input;
  return <div className="addtask">
      <input type="text" placeholder="Things I should do next..." ref={node => {input = node}}/>
      <a href="#" onClick={() => {
        //addTask added if value in input not empty
        if(input.value.trim() !== ""){
          dispatch(addTask(input.value));
          //we remove the value from the input
          input.value = '';
        }
      }}>Add Task</a>
    </div>;
}


export default connect()(AddTask);

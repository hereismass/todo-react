import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

//Part for adding a task. dispatch from redux
let AddTask = ({ dispatch }) => {
  let input;
  return <div className="task-add">
      <input type="text" placeholder="Things I should do next..." ref={node => {input = node}}/>
      <a href="#" onClick={() => {
        //addTask added if value in input not empty
        if(input.value.trim() !== ""){
          dispatch(addTask(input.value));
          //we remove the value from the input
          input.value = '';
        }
      }}><i className="fa fa-plus-square-o" aria-hidden="true"></i></a>
    </div>;
}


export default connect()(AddTask);

// action types

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

// action creators

//add
export function addTask(title){
  return {type: ADD_TASK, title};
}

//toggle
export function toggleTask(index){
  return {type: TOGGLE_TASK, index};
}

//remove
export function removeTask(index){
  return {type : REMOVE_TASK, index};
}

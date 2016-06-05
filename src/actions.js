// action types

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
/* export const REMOVE_TASK = 'REMOVE_TASK'; */
export const ALL_TASKS_DONE = 'ALL_TASKS_DONE';

// action creators

//iterator to define ids for tasks
let idIterator = 0;
//add
export function addTask(title){
  return {type: ADD_TASK, id:idIterator++, title};
}

//toggle
export function toggleTask(id){
  return {type: TOGGLE_TASK, id};
}

//remove
/*export function removeTask(id){
  return {type : REMOVE_TASK, id};
}*/

// mark all
export function allTasksDone(){
  return {type: ALL_TASKS_DONE};
}

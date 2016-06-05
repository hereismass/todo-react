import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from './actions'

//initial state
const initialState = {
  tasks: []
}

//reducer
export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            title: action.title,
            done: false
          }
        ]
      });
    case TOGGLE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => {
          if(index === action.index) {
            return Object.assign({}, task, {
              done: !task.done
            });
          }
          return task;
        })
      });
    case REMOVE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task, index) => {
          if(index === action.index) {
            return false;
          }
          return true;
        }).map((task) => {
          return task;
        });
      });
    default:
      return state;
  }
}

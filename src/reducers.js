import { ADD_TASK, TOGGLE_TASK, ALL_TASKS_DONE } from './actions'

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
            done: false,
            id: action.id
          }
        ]
      });
    case TOGGLE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          if(task.id === action.id) {
            return Object.assign({}, task, {
              done: !task.done
            });
          }
          return task;
        })
      });
    /*case REMOVE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task) => {
          if(task.id === action.id) {
            return false;
          }
          return true;
        }).map((task) => {
          return task;
        })
      });*/
    case ALL_TASKS_DONE:
    return Object.assign({}, state, {
      tasks: state.tasks.map((task) => {
        return Object.assign({}, task, {
          done: true
        });
      })
    });
    default:
      return state;
  }
}

# todo-react
A todo webapp in React + Redux.

## Installation
```js
npm install
```

## Usage
In order to launch the application, you can use:
```
webpack
```
and then
```
webpack-dev-server
```
You should be able to access the app on `http://localhost:8080`

If you want to launch the tests, you can run:
```
npm run test
```

## Explanation
We use a Redux store with a simple structure :
```
{
  tasks:[{
    title: "title string",
    done: false,
    id: 0
  }]
}
```

We have 3 actions possible :
* `addTask`: to add a new task in the Todo app.
* `toggleTask`: to change the state of the task.
* `allTasksDone`: to mark all tasks as done.

Our React App is composed of 5 components : 
* `Todo`: Top component of the application containing other components
* `MarkAllDone`: Component to mark all tasks as done. It contains a simple link that triggers the `allTasksDone` action.
* `TaskList`: Component for the list of tasks in the Todo app. It contains the logic code related to the Redux store.
* `Task` : Component of a task in the Todo app. This component is not aware of the Redux store. The onClick action is a callback from the `TaskList` component, that triggers the `toggleTask` action.
* `AddTask` : Component to add a task in the Todo app. It contains an input and a button that triggers the `addTask` action.

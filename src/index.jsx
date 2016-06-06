import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import todoApp from './reducers';
import Todo from './components/Todo';

//style
require('./style.css');

//we create the redux store
let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('app')
);

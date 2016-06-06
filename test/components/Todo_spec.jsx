import React from 'react';
import ReactDOM from 'react-dom';
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect';
import Todo from '../../src/components/Todo';
import MarkAllDone from '../../src/components/MarkAllDone';
import TaskList from '../../src/components/TaskList';
import AddTask from '../../src/components/AddTask';


describe('Todo app', () => {
  it('Todo renders the app DOM', () => {
    let renderer = createRenderer();
    renderer.render(<Todo />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div className="todo">
        <MarkAllDone />
        <hr />
        <h1>Things I need to do...</h1>
        <TaskList />
        <AddTask />
      </div>;
    expect(actualElement).toEqual(expectedElement);
  })
})

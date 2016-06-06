import expect from 'expect'
import * as actions from '../src/actions'

describe('todo app actions', () => {
  it('addTask should create ADD_TASK action', () => {
    expect(actions.addTask('run some tests')).toEqual({
      type: 'ADD_TASK',
      id: 0,
      title: 'run some tests'
    })
  })

  it('toggleTask should create TOGGLE_TASK action', () => {
    expect(actions.toggleTask(1)).toEqual({
      type: 'TOGGLE_TASK',
      id: 1
    })
  })
  it('allTasksDone should create ALL_TASKS_DONE action', () => {
    expect(actions.allTasksDone()).toEqual({
      type: 'ALL_TASKS_DONE'
    })
  })
})

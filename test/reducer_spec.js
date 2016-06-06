import expect from 'expect';


import reducer from '../src/reducers';

describe('Todo app reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({tasks:[]})
  })
  it('should handle a ADD_TASK', () => {
    expect(
      reducer({tasks:[]},{
        type: 'ADD_TASK',
        title: 'running test',
        id:0
      })
    ).toEqual({tasks:[
      {
        title:'running test',
        done:false,
        id:0
      }
    ]})

    expect(
      reducer({tasks:[
        {
          title:'running test',
          done:false,
          id:0
        }
      ]}, {
        type: 'ADD_TASK',
        title: 'running more tests',
        id:1
      })
    ).toEqual({tasks:[
      {
        title:'running test',
        done:false,
        id:0
      },{
        title:'running more tests',
        done:false,
        id:1
      }
    ]})
  })
  it('should handle a TOGGLE_TASK', () => {
    expect(
      reducer({tasks:[
        {
          title: 'running test',
          done: false,
          id: 0
        }, {
          title: 'running more tests',
          done: false,
          id: 1
        }
      ]}, {
        type: 'TOGGLE_TASK',
        id: 1
      })
    ).toEqual({tasks:[
      {
        title: 'running test',
        done: false,
        id: 0
      }, {
        title: 'running more tests',
        done: true,
        id: 1
      }
    ]})
  })
  it('should handle a ALL_TASKS_DONE', () => {
    expect(
      reducer({tasks:[
        {
          title: 'running test',
          done: false,
          id: 0
        }, {
          title: 'running more tests',
          done: false,
          id: 1
        }
      ]}, {
        type: 'ALL_TASKS_DONE'
      })
    ).toEqual({tasks:[
      {
        title: 'running test',
        done: true,
        id: 0
      }, {
        title: 'running more tests',
        done: true,
        id: 1
      }
    ]})
  })

})

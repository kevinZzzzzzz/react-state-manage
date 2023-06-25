import * as Action from './actionTypes'

export const getData = async (dispatch: any) => {
  const {data} = await window.$api.getDatas()
  return {
    type: Action.GET_DATA,
    payload: data
  }
}
export const addTodo = async (val: string) => {
  const {data} = await window.$api.addTodo({
    addItem: val
  })
  return {
    type: Action.ADD_TODO,
    payload: data.todoList
  }
}
export const delTodo = async (idx: number) => {
  const {data} = await window.$api.delTodo({index: idx})
  return {
    type: Action.DEL_TODO,
    payload: data.todoList
  }
}
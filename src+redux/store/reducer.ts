import * as actionType from './action'

export const initialState = {
  todoList: [],
  count: 0
}

const reducerFun = (state: any = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case actionType.ADD_COUNT:
      let count1 = state.count
      ++count1
      return {
        ...state,
        count: count1
      }
    case actionType.DEL_COUNT:
      let count2 = state.count
      if (count2 > 0) --count2
      return {
        ...state,
        count: count2
      }
    case actionType.ADD_TODO:
      let todoList1 = state.todoList
      todoList1.push(payload)
      return Object.assign(
        {
          ...state,
          todoList: todoList1
        }
      )
    case actionType.DEL_TODO:
      let todoList2 = state.todoList
      todoList2.splice(payload, 1)
      return {
        ...state,
        todoList: todoList2
      }
    default:
      return {
        ...state
      }
  }
}

export default reducerFun
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
        count:count1
      }
    case actionType.DEL_COUNT:
      let count2 = state.count
      --count2
      return {
        ...state,
        count:count2
      }
    default:
      return {
        ...state
      }
  }
}

export default reducerFun
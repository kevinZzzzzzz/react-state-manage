import * as Action from './actionTypes'
const initialState = {}

const reducerFunc = (state: any = initialState, action: any) => {
  const {type, payload} = action
  switch (type) {
    case Action.GET_DATA:
      state = payload
      return state;
    case Action.ADD_COUNT:
      let count1 = state.count
      ++count1
      return {
        ...state,
        count: count1
      }
    case Action.DEL_COUNT:
      let count2 = state.count
      if (count2 > 0) --count2
      return {
        ...state,
        count: count2
      }
    case Action.ADD_TODO:
      return {
        ...state,
        todoList: payload
      }
    case Action.DEL_TODO:
      return {
        ...state,
        todoList: payload
      }
    default:
      return state;
  }

}
export default reducerFunc
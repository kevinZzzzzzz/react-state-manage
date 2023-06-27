import Api from "@/Api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getDataAction = createAsyncThunk('homePage/getData', async (_extraInfo?: any, _thunkApi?: any) => {
  const respone = await Api.getDatas()
  // _thunkApi.dispatch(getData(respone.data))
  return respone.data
})
export const addTodoAction = createAsyncThunk('homePage/addTodo', async (_extraInfo?: any, _thunkApi?: any) => {
  const respone = await Api.addTodo({
    addItem: _extraInfo
  })
  _thunkApi.dispatch(getData(respone.data))
  // return respone.data
})
export const delTodoAction = createAsyncThunk('homePage/delTodo', async (_extraInfo?: any, _thunkApi?: any) => {
  const respone = await Api.delTodo({
    index: _extraInfo
  })
  return respone.data
})

// src+react-redux+redux-toolkit
export const HomePageSlice = createSlice({
  name: 'HomePage', // 命名空间
  initialState: {
    count: 0,
    todoList: []
  },
  // 同步操作
  reducers: {
    getData(state, {payload}) {
      state.count = payload.count
      state.todoList = payload.todoList
    },
    addCount(state) {
      state.count += 1
    },
    delCount(state) {
      state.count -= 1
    }
  },
  // 异步操作
  extraReducers: (builder) => {
    builder
      .addCase(getDataAction.pending, () => {
        console.log('getDataAction.fulfilled=========')
      })
      .addCase(getDataAction.fulfilled, (state: any, action: any) => {
        state.count = action.payload.count
        state.todoList = action.payload.todoList
      })
      .addCase(delTodoAction.fulfilled, (state: any, action: any) => {
        state.count = action.payload.count
        state.todoList = action.payload.todoList
      })
      .addDefaultCase(() => {
        console.log('defaultCase============')
      })
  }
})


export const { getData, addCount,delCount } = HomePageSlice.actions
export default HomePageSlice.reducer
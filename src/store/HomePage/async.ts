import  Api from '@/Api'
import useHomePageStore from './slice'

async function getDatas() {
  const {data} = await Api.getDatas()
  useHomePageStore.getState().getData(data)
  return data
}
async function addCounts(time: number) {
  // const {data} = await Api.getDatas()
  // useHomePageStore.getState().getData(data)
  // return data
  return new Promise((resolve: any) => {
    setTimeout(() => {
      useHomePageStore.getState().count = useHomePageStore.getState().count+1
      resolve()
    }, time);
  })
}

async function addTodos(todo: string) {
  const {data} = await Api.addTodo({addItem: todo})
  useHomePageStore.getState().getData(data)
  return data
}
async function delTodos(index: number) {
  const {data} = await Api.delTodo({index:index})
  useHomePageStore.getState().getData(data)
  return data
}

export default {
  getDatas,
  addTodos,
  addCounts,
  delTodos
}
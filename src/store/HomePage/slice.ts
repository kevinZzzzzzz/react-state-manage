import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'


export interface HomeState {
  count: number
  todoList: Array<any>

  getData: (data: any) => void
  addCount: () => void
  delCount: () => void
  // addTodo: (todos: Array<any>) => void
  // delTodo: (todos: Array<any>) => void
}

const useHomePageStore = create<HomeState>()(
  persist(
    (set, get) => ({
      count: 0,
      todoList: [],
      getData: (data) => set({count: data.count, todoList: data.todoList}),
      addCount: () => set((state: HomeState) => ({
        ...state,
        count: state.count + 1
      })),
      delCount: () => set((state: HomeState) => ({
        ...state,
        count: state.count - 1
      })),
      // addTodo: (todos) => set((state: HomeState) => ({
      //   ...state,
      //   todoList: todos
      // })),
      // delTodo: (todos) => set((state: HomeState) => ({
      //   ...state,
      //   todoList: todos
      // }))
    }),
    {
      name: 'home_storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useHomePageStore
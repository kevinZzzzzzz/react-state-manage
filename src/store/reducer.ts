

const initialState = {}

export default function reducer(state: any = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case 'SetUserName':
      return { ...state, username: payload }
    case 'SetAge':
      return { ...state, age: ++state.age }

    default:
      return state
  }
}

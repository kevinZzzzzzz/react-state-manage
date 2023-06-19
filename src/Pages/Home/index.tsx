import React, { forwardRef, useContext, useEffect, useImperativeHandle, useReducer, useRef } from 'react';

import {context} from '@/store/context';


const initialState = {
  username: 'kevinzzzzz',
  age: 20
}
const reducer = (state: any = initialState, action: any) => {
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
function InputComp(props: any, ref: any) {
  const inputRefs = useRef(null)

  useImperativeHandle(ref, () => ({
// 暴露出去给父级使用
    focus: () => {
      inputRefs.current.focus()
    },
    blur: () => {
      inputRefs.current.blur()
    }
  }))
  return <input type="text" name="" id="" ref={inputRefs}/>
}
// 用useImperativeHandle的子函数必须用forwardRef包裹
const InputComps = forwardRef(InputComp)
function HomePage(props: any) {
  const store = useContext(context)
  const { user, setUser } = store?.userStore || {};
  const { login, setLogin } = store?.loginStore || {};

  const inputRef = useRef<any>()

  useEffect(() => {
    console.log('~~~~~~~~')
    setTimeout(() => {
      setUser({ name: 'kevinzzzzzz'})
      setLogin(true)
      inputRef.current.blur()
    }, 3000)
  }, [setUser, setLogin])

  // react + hooks + redux
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>react + hooks + useContext</h1>
      <div>
        <p>{user?.name || '未命名'}</p>
        <p>{user?.age || '未知'}</p>
        <p>{login ? '已登录' : '未登录'}</p>
      </div>
      <button onClick={() => {
        inputRef.current.focus()
        setUser({
          ...user,
          age: user.age ? ++user.age : 1
        })
      }}>修改年龄</button><br/>
      <InputComps ref={inputRef}/>
      <hr />
      <h1>react + hooks + redux</h1>
      <context.Provider value={[state, dispatch]}>
        <ChildComp />
      </context.Provider>
    </>
  )
}

function ChildComp(props: any) {
  const [state, dispatch] = useContext(context)
  return (
    <>
      <h5>{state.username}</h5>
      <h5>{state.age}</h5>
      <button onClick={() => dispatch({type: 'SetUserName', payload: '123'})}>修改name</button>
      <button onClick={() => dispatch({type: 'SetAge'})}>修改age</button>
    </>
  )
}
export default HomePage
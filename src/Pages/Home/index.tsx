import React, { useContext, useEffect } from 'react';

import {context} from '../../store/context';

function HomePage(props: any) {
  const store = useContext(context)
  const { user, setUser } = store?.userStore || {};
  const { login, setLogin } = store?.loginStore || {};
  useEffect(() => {
    console.log('~~~~~~~~')
    setTimeout(() => {
      setUser({ name: 'kevinzzzzzz'})
      setLogin(true)
    }, 3000)
  }, [setUser, setLogin])
  return (
    <>
      <div>
        <p>{user?.name || '未命名'}</p>
        <p>{user?.age || '未知'}</p>
        <p>{login ? '已登录' : '未登录'}</p>
      </div>
      <button onClick={() => {
        setUser({
          ...user,
          age: user.age ? ++user.age : 1
        })
      }}>修改年龄</button>
    </>
  )
}

export default HomePage
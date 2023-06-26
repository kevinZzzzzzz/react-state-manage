import React from 'react';
import {HashRouter, Navigate , Route, Routes, useLocation} from 'react-router-dom'
import ReactDOM from 'react-dom';
import {AllRouters as routes} from "./router/index";
import DefaultLayout from './Layout/default';
import api from "@/Api";

declare global {
  interface Window {
    $api: any,
  }
}
/* 
  设置全局变量
*/
window.$api = {...api}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
        <Route path='/:notFoundPath' element={<Navigate to='/404'/>}></Route>
        {
          routes.map((e: any) => {
            return (
              <Route key={e.key} path={e.path} element={
                <DefaultLayout>
                  <e.component />
                </DefaultLayout>
              }>
              </Route>
            )
          })
        }
      </Routes>
    </HashRouter>
  )
}
export default App
import { lazy } from "react";

interface RouterInterface {
  key: number,
  name: string,
  path: string,
  component: any,
  children?: any[]
}

const HomePage: RouterInterface = {
  key: 0,
  name: 'Home',
  path: '/home',
  component: lazy(() => import(/* webpackChunkName: "home" */ '@/Pages/Home/index')),
  children: []
}
const NotFoundPage: RouterInterface = {
  key: 1,
  name: 'NotFound',
  path: '/404',
  component: lazy(() => import(/* webpackChunkName: "404" */ '@/Pages/404/index')),
  children: []
}

const AllRouters: RouterInterface[] = ([
  HomePage,
  NotFoundPage,
])

export {
  AllRouters
}
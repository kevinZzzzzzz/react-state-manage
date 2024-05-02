import http from '@/Http'
import { type AxiosResponse } from 'axios'
// 设置代理
const setProxy = (url: string): string => {
  return '/api' + url
}
console.log(import.meta.env, '环境变量')

export default {
  /*
    for example：
  */
  async getDatas (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.get(setProxy('/getData'), true, true)
  },
  async addTodo (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/addTodo'),{data}, true, true)
  },
  async delTodo (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/delTodo'),{data}, true, true)
  }
}

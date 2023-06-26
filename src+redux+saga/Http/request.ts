import axios from 'axios'

class HttpRequest {
  constructor() {}
  /*
    isShowToast: 是否显示接口返回信息
    isShowLoading： 是否显示接口加载状态
  */
  async get (url: string, isShowToast = false, isShowLoading = false) {
    return await this.request({ method: 'GET', url }, isShowToast, isShowLoading)
  }

  async post (url: string, data: any, isShowToast = false, isShowLoading = false) {
    return await this.request({ method: 'POST', url, ...data }, isShowToast, isShowLoading)
  }

  async request (config: any, isShowToast = false, isShowLoading = false) {
    const instance = axios.create()
    this.interceptor(instance, isShowToast, isShowLoading)
    return await instance(config)
  }

  interceptor (instance: any, isShowToast = false, isShowLoading = false) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: any) => {
        config.baseURL = location.origin
        return config
      },

      async (error: any) => {
        return await Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      async (response: any) => {
        const { status, data } = response
        if (status === 200) {
          if (data.code + '' === '0') {
            return await Promise.resolve(data)
          } else {
            return await Promise.reject(data)
          }
        }
      },
      async (error: any) => {
        const {
          response: { status }
        } = error
        // if (status === 403) {
        //   window.location.hash = '#/home'
        // }
        return await Promise.reject(error)
      }
    )
  }
}

export default HttpRequest
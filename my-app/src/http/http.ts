// 封装 HTTP 请求函数
export const BaseUrl = process.env.BASE_URL
export class HTTP {
  // 响应拦截器
  static responseInterceptors = (res: any) => {
    if (res.status === 200) {
      return res.data
    } else {
      return Promise.reject(res.message)
    }
  }

  static get(url: string, data?: any, next?: any, cache?: RequestCache) {
    let params = ""
    if (data) {
      Object.keys(data).forEach((key) => {
        params += `${key}=${data[key]}&`
      })
      params = params.slice(0, -1)
      url = `${url}?${params}`
    }
    return fetch(BaseUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next,
      cache,
    })
      .then((res) => res.json())
      .then((res) => {
        return this.responseInterceptors(res)
      })
  }
  static post(url: string, data?: any, next?: any, cache?: RequestCache) {
    console.log(BaseUrl + url)
    return fetch(BaseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data || {}),
      next,
      cache,
    })
      .then((res) => res.json())
      .then((res) => {
        return this.responseInterceptors(res)
      })
  }
}

import { HTTP } from "./http"

enum apiList {
  tangshi = "/tangshi",
}

export async function getTangshiList(params = {}) {
  return HTTP.post(apiList.tangshi, params)
}

// 根据id获取详情
export async function getTestDetail(id: string) {
  const { data } = await HTTP.get(`${apiList.tangshi}/${id}`)
  return data
}

import axiosClient from "./axoisClient"

const postApi = {
  create: (body) => {
    const url = `/posts`
    return axiosClient.post(url, body)
  },

  get: (id) => {
    const url = id ? `/posts/${id}` : `/posts`
    return axiosClient.get(url)
  },

  updateComment: (id, body) => {
    const url = `/posts/${id}`
    return axiosClient.patch(url, body)
  },
}

export default postApi

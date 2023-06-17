import { toast } from "react-toastify"
import usersApi from "../../api/usersAPI"

export const fetchAllUser = () => async (dispatch) => {
  try {
    const res = await usersApi.get()
    console.log("all user", res)
    dispatch({
      type: "allUser",
      payload: res,
    })
  } catch (error) {
    console.log(error)
  }
}
export const fetchUserById = (id) => async (dispatch) => {
  try {
    const res = await usersApi.get(id)
    dispatch({
      type: "userDetails",
      payload: res,
    })
  } catch (error) {
    console.log(error)
    toast.error("some error occured")
  }
}
export const setUserDetails = (data) => async (dispatch) => {
  try {
    const response = await usersApi.create(data)
    response?.id && toast.success("created Successfully")
    return response
  } catch (e) {
    console.log(e)
    toast.error("some error occured")
  }
}
export const updateUserInfo = (id, data) => async (dispatch) => {
  try {
    const resposne = await usersApi.update(id, data)
    console.log("chec pdate", resposne)
    dispatch({
      type: "userDetails",
      payload: resposne,
    })
  } catch (e) {
    console.log(e)
    toast.error("some error occured")
  }
}

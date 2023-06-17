import { toast } from "react-toastify"
import postApi from "../../api/postAPI"

export const feedPost = (data) => async (dispatch) => {
  try {
    const resposne = await postApi.create(data)
    dispatch(getAllPost())
    return resposne
  } catch (e) {
    console.log(e)
    toast.error("some error occured")
  }
}

export const getAllPost = () => async (dispatch) => {
  try {
    const resposne = await postApi.get()
    dispatch({
      type: "allFeed",
      payload: resposne,
    })
  } catch (e) {
    console.log(e)
    toast.error("some error occured")
  }
}

export const updateComment = (id, val) => async (dispatch) => {
  try {
    await postApi.updateComment(id, val)
    dispatch(getAllPost())
  } catch (e) {
    console.log(e)
    toast.error("some error occured")
  }
}

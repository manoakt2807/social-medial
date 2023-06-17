import { combineReducers } from "redux"
import userReducer from "./userReducer"
import postReducer from "./postReducer"

const appReducer = combineReducers({ user: userReducer, post: postReducer })

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

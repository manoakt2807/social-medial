const initialState = { userDetails: {}, allUser: [] }

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "userDetails":
      return {
        ...state,
        userDetails: payload,
      }

    case "allUser":
      return {
        ...state,
        allUser: payload,
      }
    case "allFeed":
      return {
        ...state,
        allFeed: payload,
      }

    default:
      return state
  }
}

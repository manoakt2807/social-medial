const initialState = { allFeed: [], allUser: [] }

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "allFeed":
      return {
        ...state,
        allFeed: payload,
      }

    case "allUser":
      return {
        ...state,
        allUser: payload,
      }

    default:
      return state
  }
}

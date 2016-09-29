


function posts(state = {
  isFetching: false,
  didInvalidate: false,
  sort: "AZ",
  previousSearches: [],
  items: []
}, action) {
  switch (action.type) {
    case 'INVALIDATE_SUBREDDIT':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'SET_SORT':
      return Object.assign({}, state, {
        sort: action.sort
      })
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        items: []
      })
    case 'RECEIVE_POSTS':
    console.log("ITEMSSSS" + state.items.length)
    var searches = state.items.length === 48 ? [...state.previousSearches, state.items] : state.previousSearches
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: state.items.concat(action.posts),
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default posts

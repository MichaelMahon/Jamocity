


function posts(state = {
  isFetching: false,
  didInvalidate: false,
  sort: "AZ",
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

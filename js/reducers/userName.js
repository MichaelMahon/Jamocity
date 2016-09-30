


function posts(state = {
  isFetching: false,
  didInvalidate: false,
  sort: "AZ",
  searchHistory: [],
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
    case 'SET_HISTORY':
      var newSearchHistory = state.searchHistory
      if (newSearchHistory.length === 3) {
            newSearchHistory.shift()
            newSearchHistory.push(action.newSearch);
        } else {
            newSearchHistory.push(action.newSearch);
        }
        return Object.assign({}, state, {
        searchHistory: newSearchHistory
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

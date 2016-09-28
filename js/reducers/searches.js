

function searches(state = {searches:[{searchKey:"fuzz", searchResults: {}}]}, action) {
  switch (action.type) {
    case 'ADD_SEARCH':
      return Object.assign({}, state, {
        searches: [
          ...state.searches,
          {
            searchKey: action.searchKey,
            searchResults: action.searchResults
          }
        ]
      })

    default:
      return state
  }
}



export default searches

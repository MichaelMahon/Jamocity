function currentSearch(state = {currentSearch:[{sort : "AZ"}]}, action) {
  switch (action.type) {
    case 'SET_SORT':
      return Object.assign({}, state, {
        currentSearch:
          sort: action.sort
      })

    default:
      return state
  }
}



export default currentSearch



function searches(state = {searches:[{searchKey:"fuzz", eBaysearchResults: {}, reverbsearchResults: {}}], currentsearch: {}}, action) {
  switch (action.type) {
    case 'RECEIVE_EBAY_POSTS':
      return Object.assign({}, state, {
        currentsearch: {
          searchKey: action.searchKey,
          eBaysearchResults: action.eBaysearchResults
        },
        searches: [
          ...state.searches,
          {
            searchKey: action.searchKey,
            eBaysearchResults: action.eBaysearchResults
          }
        ]
      })

    case 'RECEIVE_REVERB_POSTS':
      return Object.assign({}, state, {
        searches: [
          ...state.searches,
          {
            searchKey: action.searchKey,
            reverbsearchResults: action.reverbsearchResults
          }
        ]
      })

    default:
      return state
  }
}



export default searches

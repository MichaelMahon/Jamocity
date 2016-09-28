
// const search = (state = {}, action) => {
//
//       if (state.id !== action.id) {
//         return state
//       }
//
//       return Object.assign({}, state, {
//         completed: !state.completed
//       })
//
//     default:
//       return state
//   }
// }




function searches(state = {searchKey:"fuzz", eBaysearchResults: {}, reverbsearchResults: {}}, action) {

  switch (action.type) {
    case 'RECEIVE_EBAY_POSTS':
    case 'RECEIVE_REVERB_POSTS':
      return Object.assign({}, state, {
        searchKey: action.searchKey,
        eBaysearchResults: action.eBaysearchResults,
        reverbsearchResults: action.reverbsearchResults,

      })

    default:
      return state
  }
}




export default searches

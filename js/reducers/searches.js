
import { List, Map } from 'immutable';
import { fromJS } from 'immutable';


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

// return {
//   type: 'RECEIVE_EBAY_POSTS',
//   searchKey: product,
//   eBaysearchResults: EBPosts
// }
const init = List([]);

//https://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/
function searches(state = init, action) {

  switch (action.type) {
    case 'RECEIVE_EBAY_POSTS':
      return state.push(fromJS(action.payload));

    case 'RECEIVE_REVERB_POSTS':
      return state.push(fromJS(action.payload));

    default:
      return state
  }
}




export default searches

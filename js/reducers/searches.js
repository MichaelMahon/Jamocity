
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


  var existing = state.filter(t => {
    console.log('searchKey');
    console.log('comparing ' + t.get('searchKey') + " " + action.payload.searchKey);
    return(t.get('searchKey') === action.payload.searchKey)
  });
  console.log('existing');
  console.log(existing.size);

  if(existing.size == 0) {
    switch (action.type) {


      case 'RECEIVE_EBAY_POSTS':
        return state.push(fromJS(action.payload));

      case 'RECEIVE_REVERB_POSTS':
        return state.push(fromJS(action.payload));

      default:
        return state
    }
  }
  else
  {
    switch (action.type) {
      case 'RECEIVE_EBAY_POSTS':
        //return state.map(t => {
          //if(t.get('searchKey') === action.payload.searchKey) {


            //return t.update('eBaysearchResults', eBaysearchResults => action.payload.eBaysearchResults);

            return state.update(
                state.findIndex(function(item) {
                  return item.get("searchKey") === action.payload.searchKey ;
                }), function(item) {
                  return item.set("eBaysearchResults", action.payload.eBaysearchResults);
                }
            );
            return list;



          //} else {
          //  return t;
         // }
        //});


      // case 'RECEIVE_REVERB_POSTS':
      //   return state.map(t => {
      //     //if(t.get('searchKey') === action.payload.searchKey) {
      //       //return t.update('reverbsearchResults', reverbsearchResults => action.payload.reverbsearchResults);
      //     //} else {
      //       return t;
      //     //}
      //   });


      default:
        return state
    }



  }

}




export default searches

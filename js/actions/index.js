
import fetch from 'isomorphic-fetch'
import reverbListings2JC from '../utilities.js'

//const REVERB_QUERY = `https://reverb.com/api/listings?query=%PROD%&conditions=b-stock&make=fender&page=1&per_page=24`
const REVERB_QUERY = `https://reverb.com/api/listings?query=%PROD%&page=1&per_page=24`

let nextTodoId = 0
export const loadProducts = (text) => {
  return {
    type: 'LOAD_PRODUCT',
    text
  }
}

export const addSearch = (searchKey, searchResults) => {
  return {
    type: 'ADD_SEARCH',
    searchKey: searchKey,
    searchResults
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


//export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: 'REQUEST_POSTS',
    subreddit
  }
}

//export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  console.log("receivePosts Entry");
   var JCPosts = reverbListings2JC(json.listings);

  return {
    type: 'RECEIVE_POSTS',
    subreddit,
    posts: JCPosts,
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(product) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    console.log("fetchPosts before requestPosts");

    dispatch(requestPosts(product))

    var queryUrl = REVERB_QUERY.replace('%PROD%', product);  // TODO urlencode product

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(queryUrl)
        .then(response => response.json())
        .then(json =>

            // We can dispatch many times!
            // Here, we update the app state with the results of the API call.

    dispatch(receivePosts(product, json))
        )

    // In a real world app, you also want to
    // catch any error in the network call.
  }
}
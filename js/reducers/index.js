import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import currentProduct from './currentProduct'
import currentSearch from './userName'
import searches from './searches'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  currentProduct,
  currentSearch,
  searches
})

export default todoApp
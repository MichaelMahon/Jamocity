import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import currentProduct from './currentProduct'
import currentSearch from './currentSearch'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  currentProduct,
  currentSearch
})

export default todoApp
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import ProductPage from '../components/ProductPage'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.currentProduct
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const ProductPageContainer = connect(
  mapStateToProps
)(ProductPage)

export default ProductPageContainer
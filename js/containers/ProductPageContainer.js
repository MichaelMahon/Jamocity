import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import ProductPage from '../components/ProductPage'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.currentProduct
  }
}

const ProductPageContainer = connect(
  mapStateToProps
)(ProductPage)

export default ProductPageContainer
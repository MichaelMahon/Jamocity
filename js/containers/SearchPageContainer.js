import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import SearchPage from '../components/SearchPage'

const mapStateToProps = (state, ownProps) => {
  let items = state.currentSearch.items;

//   console.log(items);
//   var jcNodes = items.map(function(jcProd) {
//     return (
//         <ListGroupItem name={jcProd.name} price={jcProd.price} href = {jcProd.href}>
//
//         </ListGroupItem>
//     );
//   });
// console.log(jcNodes);


  return {
    dataString: JSON.stringify(state.currentSearch.items),
    dataObj: items

  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }\

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const SearchPageContainer = connect(
  mapStateToProps
)(SearchPage)

export default SearchPageContainer
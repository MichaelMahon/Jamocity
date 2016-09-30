import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import SearchPage from '../components/SearchPage'

const mapStateToProps = (state, ownProps) => {
	let items = state.currentSearch.items;

if(state.currentSearch.sort === 'A-Z') {
	items.sort(function(a, b){
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
 		if (nameA < nameB) //sort string ascending
 			return -1;
 		if (nameA > nameB)
 			return 1;
 		return 0; //default return value (no sorting)
		});
} else if(state.currentSearch.sort === 'Z-A') {
	items.sort(function(a, b){
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
 		if (nameA > nameB) //sort string ascending
 			return -1;
 		if (nameA < nameB)
 			return 1;
 		return 0; //default return value (no sorting)
		});
} else if(state.currentSearch.sort === 'Price (Highest)') {
	items.sort(function(a,b){
		var priceA = a.price, priceB=b.price;
    return priceB - priceA
	});
} else if(state.currentSearch.sort === 'Price (Lowest)') {
	items.sort(function(a,b){
		var priceA = a.price, priceB=b.price;
    return priceA - priceB
	});
}



return {
	dataString: JSON.stringify(state.currentSearch.items),
	dataObj: items

}
}

const SearchPageContainer = connect(
	mapStateToProps
	)(SearchPage)

	export default SearchPageContainer
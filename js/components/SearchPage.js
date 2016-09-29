import React, { PropTypes } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import JCProd from './JCProd'


var SearchPageList = React.createClass({
    getInitialState: function() {
        return {data: []};
    },

    render: function() {
        var jcNodes;
    var r = [];

        // iterate props.data object into an []
        //r.push({name: "fred", price :"13", href: "3"})
        r = this.props.data
        console.log("now log r")
        console.log(r[0]);
           jcNodes = r.map(function(jcProd) {
     return (

         <ListGroupItem >
            <JCProd key={jcProd.id} mfg={jcProd.mfg} name={jcProd.name} web={jcProd.web} source={jcProd.source} price={jcProd.price} condition= {jcProd.condition} href = {jcProd.href ? jcProd.href : "./photo_not_available.png"}/>
         </ListGroupItem>
     );
   });
        return (
            <div className="commentList">
                {jcNodes}
            </div>)
    }
});


var SearchPage = React.createClass({

    render: function() {

        return (
            <div className="commentBox">
                <ListGroup>
                <SearchPageList data={this.props.dataObj} />
                </ListGroup>
            </div>
        );
    }
});




// TODO How to require an object?
// SearchPage.propTypes = {
//   data: PropTypes.string.isRequired
//
// }

export default SearchPage
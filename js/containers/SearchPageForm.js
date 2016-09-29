import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { fetchEbayPosts } from '../actions'
import { setSortOrder } from '../actions'
import { setNewHistory } from '../actions'
import { Grid, Row, Col, Checkbox, Radio, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button, Label, ListGroup, ListGroupItem} from 'react-bootstrap';

const SearchPageForm = React.createClass({


    doSearch() {
        console.log(this.props.currentSearch.searchHistory)
        if(!this.props.currentSearch.searchHistory.includes(searchBox.value)) this.props.history(searchBox.value)
        this.props.sort(sortOpt.value)
        if (showReverb.checked) this.props.reverbSearch(searchBox.value)
        if (showEbay.checked) this.props.ebaySearch(searchBox.value)
    },

    handleClick(e) {
        e.preventDefault()
        if (!searchBox.value.trim()) {
            return
        }

        this.doSearch();
    },



    render() {
        return (
            <Form inline>
            {' '}
            <FormGroup controlId="searchBox">
                <FormControl type="text" placeholder="Search!"/>
            </FormGroup>
            <h3>Search Options </h3>
            <Row>
                <Col md={6}>
                    <Checkbox id="showReverb" defaultChecked>
                        Reverb
                    </Checkbox>
                </Col>
                <Col md={6}>
                    <Checkbox id="showEbay" defaultChecked>
                        Ebay
                    </Checkbox>
                </Col>
            </Row>
            <h3>Sort</h3>
            <FormControl id="sortOpt" componentClass="select" placeholder="A-Z">
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="H-L">Price (Highest) </option>
                <option value="L-H">Price (Lowest) </option>

            </FormControl>
            <Row>
                <Col md={6}></Col>
                <br />
                <Col md={6}>
                    <Button onClick={this.handleClick} type="submit">
                        Search
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h1>{this.props.currentSearch.searchHistory[0]}</h1>
                    <h1>{this.props.currentSearch.searchHistory[1]}</h1>
                    <h1>{this.props.currentSearch.searchHistory[2]}</h1>
                    
                </Col>
            </Row>

        </Form>
        )
    }
});

var mapDispatchToProps = function(dispatch){
    return {
        reverbSearch: function(newSearch){ dispatch(fetchPosts(newSearch)); },
        ebaySearch: function(newSearch){ dispatch(fetchEbayPosts(newSearch)); },
        sort: function(newSort){dispatch(setSortOrder(newSort));},
        history: function(newSearch){dispatch(setNewHistory(searchBox.value));}
    }
};

var mapStateToProps = function(state){
    // This component will have access to `state.battlefield` through `this.props.battle`
    console.log(state.currentSearch.searchHistory)
    return {currentSearch : state.currentSearch};
};


//export default FormExample
module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchPageForm);

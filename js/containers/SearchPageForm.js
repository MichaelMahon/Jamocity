import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { fetchEbayPosts } from '../actions'
import { setSortOrder } from '../actions'
import { setNewHistory } from '../actions'
import { Grid, Row, Col, Checkbox, Radio, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button, Label, ListGroup, ListGroupItem} from 'react-bootstrap';

const SearchPageForm = React.createClass({


    doSearch(search) {
        if(!this.props.currentSearch.searchHistory.includes(JSON.stringify(search))) this.props.history(JSON.stringify(search))
        this.props.sort(search.sort)
        if (search.reverb) this.props.reverbSearch(search.keyWord)
        if (search.ebay) this.props.ebaySearch(search.keyWord)
    },

    redoSearch(search) {
        this.doSearch(search);

        searchBox.value = search.keyWord;
        showEbay.checked = search.ebay;
        showReverb.checked = search.reverb;
        sortOpt.value = search.sort;
    },

    handleClick(e) {
        e.preventDefault()
        if (!searchBox.value.trim()) {
            return
        }

        var search = {
            keyWord : searchBox.value,
            ebay : showEbay.checked,
            reverb : showReverb.checked,
            sort : sortOpt.value
        }

        this.doSearch(search);
    },



    render() {
        return (
            <Form inline>
            {' '}
            <h3>Search</h3>
            <FormGroup controlId="searchBox">
                <FormControl bsClass="text searchBox" type="text" placeholder="Search!"/>
            </FormGroup>
            <h3>Options </h3>
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
            {this.props.currentSearch.searchHistory.length != 0 ? <h3>Previous Searches</h3> : ""}
            <Row>
                <Col md={6}>
                    <ListGroup bsClass="list-group searchList">
                        {this.props.currentSearch.searchHistory[3] ? <ListGroupItem onClick={() => {this.redoSearch(JSON.parse(this.props.currentSearch.searchHistory[3]))}} header={JSON.parse(this.props.currentSearch.searchHistory[3]).keyWord}>Sorted: {JSON.parse(this.props.currentSearch.searchHistory[3]).sort}</ListGroupItem> : ""}
                        {this.props.currentSearch.searchHistory[2] ? <ListGroupItem onClick={() => {this.redoSearch(JSON.parse(this.props.currentSearch.searchHistory[2]))}} header={JSON.parse(this.props.currentSearch.searchHistory[2]).keyWord}>Sorted: {JSON.parse(this.props.currentSearch.searchHistory[2]).sort}</ListGroupItem> : ""}
                        {this.props.currentSearch.searchHistory[1] ? <ListGroupItem onClick={() => {this.redoSearch(JSON.parse(this.props.currentSearch.searchHistory[1]))}} header={JSON.parse(this.props.currentSearch.searchHistory[1]).keyWord}>Sorted: {JSON.parse(this.props.currentSearch.searchHistory[1]).sort}</ListGroupItem> : ""}
                        {this.props.currentSearch.searchHistory[0] ? <ListGroupItem onClick={() => {this.redoSearch(JSON.parse(this.props.currentSearch.searchHistory[0]))}} header={JSON.parse(this.props.currentSearch.searchHistory[0]).keyWord}>Sorted: {JSON.parse(this.props.currentSearch.searchHistory[0]).sort}</ListGroupItem> : ""}
                    </ListGroup>
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
        history: function(newSearch){dispatch(setNewHistory(newSearch));}
    }
};

var mapStateToProps = function(state){
    // This component will have access to `state.battlefield` through `this.props.battle`
    console.log(state.currentSearch.searchHistory)
    return {currentSearch : state.currentSearch};
};


//export default FormExample
module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchPageForm);

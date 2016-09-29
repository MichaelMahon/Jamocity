import React from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'
import { loadProducts } from '../actions'
//import { addSearch } from '../actions'
import { Grid, Row, Col, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button, Label} from 'react-bootstrap';


const NavBar = React.createClass({


    handleUserNameChange(e) {
        e.preventDefault();
        this.props.username(e.target.value)
    },

    handleSubmit(e) {
        e.preventDefault();
        // put some search keys in searchPanel
        //this.props.addSearch("keeley", {reverb: "some json here"})

        //this.props.username("Malificent")
    },



    render() {
        return (


                <Form inline>
                    <Image src="/JC.png" thumbnail />

                    {/*<FormGroup controlId="formInlineEmail">*/}
                        {/*<ControlLabel>Email</ControlLabel>*/}
                        {/*{' '}*/}
                        {/*<FormControl type="email" placeholder="jane.doe@example.com" />*/}
                    {/*</FormGroup>*/}
                    {' '}

                    <FormGroup controlId="formInlineName">
                        <ControlLabel>User Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder={this.props.userName} onChange={this.handleUserNameChange}
                        />
                    </FormGroup>
                    {' '}

                    <Button type="submit"
                         onClick={this.handleSubmit}>Enter User
                    </Button>


                </Form>

        );
    }
});

var mapStateToProps = function(state){
    // This component will have access to `state.battlefield` through `this.props.battle`
     console.log("FormExample mapstatetoprops");
    console.log(state.searches.size)
    //console.log(state.searches.first().)
    // just look at first item in state list - will be either ebay or reverb for now
    var payloadMap = state.searches.first();
    console.log(payloadMap);
    if(payloadMap) {
        console.log(payloadMap.get('searchKey'))
        console.log('showing any eBaysearchResults')
        if(payloadMap.get('eBaysearchResults')) {
            console.log(payloadMap.get('eBaysearchResults').first().get('name'))
        }
        console.log('showing any reverbsearchResults')
        if(payloadMap.get('reverbsearchResults')) {
            console.log(payloadMap.get('reverbsearchResults').first())
        }
    }

    // how to get the array out of the list

    return {userName :state.currentProduct,
            searches: state.searches
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        username: function(username){ dispatch(loadProducts(username)); },
        //addSearch: function(searchKey, results){ dispatch(addSearch(searchKey, results)); }
    }
};


//export default FormExample
module.exports = connect(mapStateToProps,mapDispatchToProps )(NavBar);
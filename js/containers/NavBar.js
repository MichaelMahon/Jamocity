import React from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'
import { loadProducts } from '../actions'
import { Grid, Row, Col, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button} from 'react-bootstrap';


const FormExample = React.createClass({


    handleUserNameChange(e) {
        e.preventDefault();
        this.props.username(e.target.value)
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.username("Malificent")
    },



    render() {
        return (


                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder={this.props.userName} onChange={this.handleUserNameChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {' '}
                        <FormControl type="email" placeholder="jane.doe@example.com" />
                    </FormGroup>
                    {' '}
                    <Button type="submit"
                        onClick={this.handleSubmit}>
                    </Button>
                </Form>

        );
    }
});

var mapStateToProps = function(state){
    // This component will have access to `state.battlefield` through `this.props.battle`
     console.log("FormExample mapstatetoprops");
    console.log(state.currentProduct)

    return {userName :state.currentProduct};
};

var mapDispatchToProps = function(dispatch){
    return {
        username: function(username){ dispatch(loadProducts(username)); },

    }
};


//export default FormExample
module.exports = connect(mapStateToProps,mapDispatchToProps )(FormExample);
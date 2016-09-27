import React from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'
import { loadProducts } from '../actions'
import { Grid, Row, Col, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button, Label} from 'react-bootstrap';


const NavBar = React.createClass({


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
                    <Image src="/img/test.png" thumbnail />

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

                    <Label> state.currentProduct {this.props.userName} </Label>

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
module.exports = connect(mapStateToProps,mapDispatchToProps )(NavBar);
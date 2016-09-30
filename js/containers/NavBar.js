import React from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'
import { loadProducts } from '../actions'
import { addSearch } from '../actions'
import { Grid, Row, Col, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button, Label, Carousel} from 'react-bootstrap';


const NavBar = React.createClass({


    handleUserNameChange(e) {
        e.preventDefault();
        this.props.username(e.target.value)
    },

    handleSubmit() {
        e.preventDefault();
        // put some search keys in searchPanel
        this.props.addSearch("keeley", {})

        //this.props.username("Malificent")
    },



    render() {
        return (

            <Grid>
                <Row>
                    <Col md={4}>
                        <Image src="/Img/JamoCity.png" height={80}/>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={7}>
                
                    <Carousel controls={false} interval={7500}>
                        <Carousel.Item>
                            <em><small>I always compare on Jamocity when I'm shopping gear - Angus Young</small></em>
                        </Carousel.Item>
                        <Carousel.Item>
                            <em><small>It's so easy - no logon needed! - Lenny M</small></em>
                        </Carousel.Item>
                    </Carousel>
                
                
                    <Carousel controls={false} interval={10000}>
                        <Carousel.Item>
                            <em><small>It's so easy - no logon needed! - Lenny M</small></em>
                        </Carousel.Item>
                        <Carousel.Item>
                            <em><small>I always compare on Jamocity when I'm shopping gear - Angus Young</small></em>
                        </Carousel.Item>
                    </Carousel>
                
                </Col>
                </Row>
            </Grid>



            );
    }
});

var mapStateToProps = function(state){
    // This component will have access to `state.battlefield` through `this.props.battle`

    return {userName :state.currentProduct,
            searches: state.searches
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        username: function(username){ dispatch(loadProducts(username)); },
        addSearch: function(searchKey, results){ dispatch(addSearch(searchKey, results)); }
    }
};


//export default FormExample
module.exports = connect(mapStateToProps,mapDispatchToProps )(NavBar);
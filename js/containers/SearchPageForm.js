import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { fetchEbayPosts } from '../actions'
import { setSortOrder } from '../actions'
import { saveSearchHistory } from '../actions'
import { Grid, Row, Col, Checkbox, Radio, Image, FormGroup, ControlLabel, HelpBlock, FormControl, Form, Button, Label} from 'react-bootstrap';

let SearchPageForm = ({ dispatch }) => {
    let input

    function handleClick(e) {
            e.preventDefault()
                if (!searchBox.value.trim()) {
                    return
                }
                
                dispatch(setSortOrder(sortOpt.value))
                if(showReverb.checked) dispatch(fetchPosts(searchBox.value))
                if(showEbay.checked) dispatch(fetchEbayPosts(searchBox.value))
                dispatch(saveSearchHistory)
    }

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
                    <option value="H-L">Price (Highest)</option>
                    <option value="L-H">Price (Lowest)</option>

                </FormControl>
                <Row>
                    <Col md={6}></Col>
                    <br />
                    <Col md={6}>
                        <Button onClick={handleClick} type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>

            </Form>
    )
}
SearchPageForm = connect()(SearchPageForm)

export default SearchPageForm
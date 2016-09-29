import React from 'react'
import Footer from './Footer'

import NavBar from '../containers/NavBar'
import VisibleTodoList from '../containers/VisibleTodoList'

import ProductPage from './ProductPage'
import ProductPageForm from '../containers/ProductPageForm'
import SearchPageForm from '../containers/SearchPageForm'
import ProductPageContainer from '../containers/ProductPageContainer'
import SearchPageContainer from '../containers/SearchPageContainer'
import { Grid, Row, Col, Image, Media, Button, Panel} from 'react-bootstrap'

const App = () => (
    <div>

    <Grid>
        <Row>
            <Col md={12}>
            <Panel bsClass="panel navPanel"><h3><NavBar/></h3></Panel>
            </Col>
        </Row>
        <Row>
             <Col xs={2} md={3}>
                    <Panel bsClass="panel searchPane"><SearchPageForm/></Panel>
             </Col>
             <Col xs={4} md={9}>
                    <Panel bsClass="panel listingPanel"><SearchPageContainer/></Panel>
             </Col>
        </Row>
    </Grid>

    </div>
)

export default App
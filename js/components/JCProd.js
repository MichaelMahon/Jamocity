import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';

const JCProd = ({ name, price , href}) => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}><code>{name}</code></Col>
            <Col xs={6} md={4}><code>{price}</code></Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} xsOffset={6}><code><Image src={href} thumbnail /></code></Col>
        </Row>

        <Row className="show-grid">
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row>
    </Grid>
)

// JCProd.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default JCProd
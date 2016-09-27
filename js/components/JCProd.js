import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image, Media, Button} from 'react-bootstrap';

const JCProd = ({ mfg, name, price, web, condition, href}) => (
    <Grid>
        <Row>
            <Col xs={6} md={8}>
            <Media>
                <Media.Left>
                    <Image width={100} height={100} src={href} rounded/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{name}</Media.Heading>
                        <p>By: {mfg}</p>
                        <p>Condiition: {condition}</p>
                </Media.Body>
                <Media.Right align="top">
                <p>${price}</p>
                <p><br /><Button href={web} target="_blank" bsStyle="primary">Shop Now</Button></p>
                </Media.Right>
            </Media>
            </Col>
        </Row>
    </Grid>
)

// JCProd.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default JCProd
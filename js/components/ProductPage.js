import React, { PropTypes } from 'react'
import { Image } from 'react-bootstrap';

const ProductPage = ({ data }) => (
  
  <div>
   Logged in as [ {data}  ]
      <Image source= 'https://www.pexels.com/photo/people-festival-party-dancing-849'  />
  </div>
)

ProductPage.propTypes = {
  data: PropTypes.string.isRequired
  
}

export default ProductPage
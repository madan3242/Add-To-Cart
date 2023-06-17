import React from 'react'
import { Button, Row } from 'react-bootstrap'

const Products = () => {
  return (
    <>
        <Row>
            <h2>Products</h2>
        </Row>
        <Row>
          <Col>
            <Button>Add Product</Button>
          </Col>
        </Row>
    </>
  )
}

export default Products
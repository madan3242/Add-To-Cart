import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from '../../components/products/ProductFilter'
import './Products.css'

const Products = () => {
  return (
    <>
      <div className="productContainer" style={{ height: "700px"}}>
        <Container>
          <Row>
            <ProductFilter />
            <Col lg={10}>HI</Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Products
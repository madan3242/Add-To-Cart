import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from './ProductFilter'
import './Products.css'

const Products = () => {
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
    brand: "",
    catagorey: "",
    rating: 0
  })
  



  return (
    <>
      <div className="productContainer" style={{ height: "700px"}}>
        {/* {JSON.stringify(filter)} */}
        <Container>
          <Row>
            <ProductFilter filter={filter} setFilter={setFilter} />
            <Col lg={10}>
              <Row>
                <Col lg={3} className='product'>
                  Product
                </Col>
                <Col lg={3} className='product'>
                  Product
                </Col>
                <Col lg={3} className='product'>
                  Product
                </Col>
                <Col lg={3} className='product'>
                  Product
                </Col>
                <Col lg={3} className='product'>
                  Product
                </Col>
                <Col lg={3} className='product'>
                  Product
                </Col>
              </Row>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from './ProductFilter'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'
import { getAllProducts } from '../../redux/product/product.action'

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    search: "",
    minPrice: 0,
    maxPrice: 250000,
    brand: "",
    catagorey: "",
    rating: 0
  })
  useEffect(() => {
    dispatch(getAllProducts(filter))
  }, [dispatch])

  
  return (
    <>
      <div className="productContainer" style={{ height: "700px"}}>
        {/* {JSON.stringify(products)} */}
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
              
                
                {/* <Pagination />  */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Products
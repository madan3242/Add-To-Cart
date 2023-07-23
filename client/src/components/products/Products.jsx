import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from './ProductFilter'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'
import { getAllProducts } from '../../redux/product/product.action'

const Products = () => {
  const {products, totalProductCount, filteredProductNumber} = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    keyword: "",
    minPrice: 0,
    maxPrice: 250000,
    brand: "",
    category: "",
    rating: 0
  })
  useEffect(() => {
    dispatch(getAllProducts(filter))
  }, [dispatch])

  const submitFilter = (e) => {
    e.preventDefault()
    dispatch(getAllProducts(filter))
  }
  
  return (
    <>
      <div className="productContainer" style={{ height: "700px"}}>
        <Container>
          <Row>
            <ProductFilter filter={filter} setFilter={setFilter} submitFilter={submitFilter} />
            <Col lg={10}>
              <Row>
                { products?.length > 0 ? <>                  
                  {products?.map((product) => {
                    return <Col lg={3} className='product' key={product._id}>
                      <img src={product.photos[0].secure_url} alt="" height="220px" />
                      <h4 className='mt-2'>{product.name}</h4>
                    </Col>
                  })}
                </> : <>
                  
                </>}
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
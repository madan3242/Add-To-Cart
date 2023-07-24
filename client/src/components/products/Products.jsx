import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from './ProductFilter'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'
import { getAllProducts } from '../../redux/product/product.action'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const {products, totalProductCount, filteredProductNumber} = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFilter = {
    keyword: "",
    minPrice: 0,
    maxPrice: 250000,
    brand: "",
    category: "",
    rating: 0
  }
  const [filter, setFilter] = useState(initialFilter)

  useEffect(() => {
    dispatch(getAllProducts(filter))
  }, [dispatch, filter])

  const submitFilter = (e) => {
    e.preventDefault()
    dispatch(getAllProducts(filter))
  }
  
  const handleReset = () => {
    setFilter(initialFilter)
  }
  
  return (
    <>
      <div className="product-container">
      {/* {JSON.stringify(filter)} */}
        <Container>
          <Row>
            <ProductFilter filter={filter} setFilter={setFilter} submitFilter={submitFilter} handleReset={handleReset} />
            <Col lg={10}>
              <Row>
                { products?.length > 0 ? <>                  
                  {products?.map((product) => {
                    return <Col lg={3} className='product' key={product._id} onClick={() => navigate(`/products/${product._id}`)}>
                      <img src={product.photos[3].secure_url} alt={product.name} height="220px" />
                      <h4 className='mt-2'>{product.name}</h4>
                      <p>&#8377;{product.price}</p>
                    </Col>
                  })}
                </> : <>
                  <h2>No products found</h2>
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
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from './ProductFilter'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/product/product.action'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { GrNext, GrPrevious } from 'react-icons/gr'

const Products = () => {
  const {
    products, 
    resultPerPage,
    totalProductCount, 
    filteredProductNumber
  } = useSelector((state) => state.products);


  let { keyword } = useParams("keyword");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFilter = {
    keyword: "",
    minPrice: 0,
    maxPrice: 250000,
    brand: "",
    category: "",
    rating: 0,
    currentPage: 1
  }
  const [filter, setFilter] = useState(initialFilter);

  let pageCount = Math.ceil(totalProductCount / resultPerPage);
  
  useEffect(() => {
    pageCount = Math.ceil(totalProductCount / resultPerPage)
    setFilter({
      ...filter,
      keyword: keyword?.length > 0 ? keyword : ""
    })
  }, [filter.category, keyword])

  const handlePageChange = (e) => {
    setFilter({
      ...filter,
      currentPage: e.selected + 1
    })
  }

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
        <Container className="product-container">
          <Row className='mx-auto'>
            <Col lg={2} className="product-filter">
              <ProductFilter filter={filter} setFilter={setFilter} submitFilter={submitFilter} handleReset={handleReset} />
            </Col>
            <Col md={12} lg={10}>
              <Row>
                { products?.length > 0 ? <>                  
                  {products?.map((product) => {
                    return <Col md={6} lg={4}  key={product._id} onClick={() => navigate(`/product/${product._id}`)}>
                      <div className='product'>
                      <img src={product.photos[0].secure_url} alt={product.name} height="220px" />
                      <h4 className='mt-2'>{product.name}</h4>
                      <p>&#8377;{product.price}</p>
                      </div>
                    </Col>
                  })}
                </> : <>
                  <h2>No products found</h2>
                </>}
              </Row>
              <Row className='mt-4'>
                  {products.length < filteredProductNumber ? <>
                    <ReactPaginate 
                      previousLabel={ <GrPrevious /> }
                      nextLabel={ <GrNext />}
                      pageCount={pageCount}
                      onPageChange={handlePageChange}
                      containerClassName='pagination'
                      previousLinkClassName='pagination__link'
                      nextLinkClassName='pagination__link'
                      disabledClassName='pagination__link--disabled'
                      activeClassName='pagination__link--active'
                    />
                  </> : <></>}
              </Row>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Products
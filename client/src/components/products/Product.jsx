import React, { useEffect } from 'react'
import { Breadcrumb, Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/product/product.action';

const Product = () => {
  const product = useSelector(state => state.productDetails.product.product)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [dispatch])
  return (
    <>
      <Container className='product-details'>
            {/* {JSON.stringify(product.photos)} */}
        {
          product &&
          <>
            <Row>
              <Breadcrumb>
                <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => navigate('/products')}>Products</Breadcrumb.Item>
                <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row>
              <Col lg={6}>
                <Carousel>
                  {
                    product?.photos?.map((photo) => {
                      return <Carousel.Item key={photo.id}>
                        <img src={photo?.secure_url} alt="" height="580px" />
                      </Carousel.Item>
                    })
                  }
                </Carousel>
              </Col>
              <Col lg={6}>
                  
                    <h3>{product.brand}</h3>
                    <h1>{product.name}</h1>
                    <h3>&#8377;{product.price}</h3>
                    <p>{product.description}</p>
                    <Button size='lg' variant='secondary'>Add To Cart</Button>&nbsp;
                    <Button size='lg'>Buy Now</Button>
                    <p style={{ color: 'red'}}>Hurry up! {product.stocks} left</p>
                  <Row className='pt-4'>
                    <h3>Ratings & Reviews</h3>
                  </Row>
              </Col>
            </Row>
            <Row>

            </Row>
          </>
        }
      </Container>
    </>
  )
}

export default Product
import React from 'react'
import './Cart.css'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Cart = () => {
  return (
    <>
        <Container className='cart-container'>
            <Row className='mx-4'>
                <Col >
                    <h1><AiOutlineShoppingCart /> Cart</h1>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    </>
  )
}

export default Cart
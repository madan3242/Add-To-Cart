import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import CreateProduct from '../createproduct/CreateProduct'
import './product.css'

const Products = () => {
  const [createProduct, setCreateProduct] = useState(false)

  const toggleAddProduct = () => {
    setCreateProduct(!createProduct)
  }
  return (
    <>
      <div style={{ position: "relative"}}>
        {createProduct && <CreateProduct />}
        <Button style={{float: "right"}} onClick={toggleAddProduct}>Add Product</Button>
        <Row>
            <h2>Products</h2>
        </Row>
        <Row>
          
        </Row>

      </div>
    </>
  )
}

export default Products
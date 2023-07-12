import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import AddProduct from './AddProduct'
import './product.css'

const Products = () => {
  const [addProduct, setAddProduct] = useState(false)

  const toggleAddProduct = () => {
    setCreateProduct(!createProduct)
  }
  return (
    <>
      <div style={{ position: "relative"}}>
        {addProduct && <AddProduct />}
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
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        qty: "",

    });

    const productInputChange = (e) => {
        setProduct({
            ...product, 
            [e.target.name]: e.target.value
        })
    }

    const createProduct = (e) => {
        e.preventDefault();

    }
  return (
    <>
        <div className="create-product">
            <Form>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" />

                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Price" />

                <Form.Label>Product Qty</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Qty" />

                <Button onClick={createProduct}>Create Product</Button>
            </Form>
        </div>
    </>
  )
}

export default CreateProduct
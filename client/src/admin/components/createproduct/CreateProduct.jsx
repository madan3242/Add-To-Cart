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
            <h2>Create Product</h2>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" />

                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Price" />

                <Form.Label>Qty</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Qty" />

                <Button onClick={createProduct}>Create Product</Button>
            </Form>
        </div>
    </>
  )
}

export default CreateProduct
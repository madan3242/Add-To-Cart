import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../../redux/product/product.action";

const AddProduct = ({ setAddProduct }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    photos: [],
    category: "",
    brand: "",
    stocks: "",
  });

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  let imageHandler = (e) => {
    let imageFiles = Array.from(e.target.files)
    let files = [];
    
    imageFiles.map((file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        if(reader.result) {
          files.push(reader.result)
        }
      })
    })
    setProduct({
      ...product,
      photos: files
    })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddProduct(false);
    console.log(product);
    dispatch(createProduct(product))
  };
  return (
    <>
      <div className="add-product">
        <h2>Add Product</h2>
        <Form encType="multipart/form-data" onSubmit={handleSubmit}>
          <Row>
            <Col lg={6}>
              <Form.Label className="mt-3">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Name" name="name" onChange={handleInputChange}/>

              <Form.Label className="mt-3">Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Price" name="price" onChange={handleInputChange} />

              <Form.Label className="mt-3">Description</Form.Label>
              <Form.Control
                as={"textarea"}
                rows={4}
                placeholder="Enter Product Description"
                name="description"
                onChange={handleInputChange}
              />

            </Col>
            <Col lg={6}>
              <Form.Label className="mt-3">Photos</Form.Label>
              <Form.Control type="file" multiple name="photos" onChange={imageHandler} />

              <Form.Label className="mt-3">Category</Form.Label>
              <Form.Control as={"select"} placeholder="Enter Product Category" name="category" onChange={handleInputChange} >
                <option value="mobiles">MOBILES</option>
                <option value="electronics">ELECRONICS</option>
                <option value="fashion">FASHION</option>
              </Form.Control>

              <Form.Label className="mt-3">Brand</Form.Label>
              <Form.Control type="text" placeholder="Enter Brand Name" name="brand" onChange={handleInputChange} />

              <Form.Label className="mt-3">Stocks</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Quantity" name="stocks" onChange={handleInputChange} />
            </Col>
          </Row>

          <Button type="submit" className="mt-3">
            Add Product
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;

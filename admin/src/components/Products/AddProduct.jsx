import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/product/product.action";
import { GrClose } from "react-icons/gr";
import Loader from "../Loader/Loader";

const AddProduct = ({ setAddProduct, toggleAddProduct }) => {
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
  const [loading, setLoading] = useState(false)

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
    dispatch(createProduct(product, setAddProduct, setLoading))
  };
  return (
    <>
      <div className="add-product">
        <GrClose size={30} className="close-icon" onClick={toggleAddProduct} />
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
            {loading ? <Loader size={"sm"}/> : "Add Product"}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;

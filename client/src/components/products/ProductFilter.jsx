import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductFilter = ({ filter, setFilter, submitFilter }) => {
    
    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }
  return (
    <>
      <Col lg={2} className="productFilter">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="MIN" name="minPrice" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="MAX" name="maxPrice" onChange={handleChange}/>
                    </Form.Group>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="" name="brand" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Check type="radio" name="category" value="mobiles" label="MOBILES" />
                <Form.Check type="radio" name="category" value="electronics" label="ELECTRONICS" />
                <Form.Check type="radio" name="category" value="fashion" label="FASHION" />
            </Form.Group>
            <Form.Group className="mb-3 mx-auto">
                <Form.Label>Ratings</Form.Label>
                <div style={{cursor: "pointer"}} >
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                </div>
                <div>
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                </div>
                <div>
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                </div>
                <div>
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                </div>
                <div>
                    <AiFillStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                    <AiOutlineStar size={30} style={{ color: "gold"}} />
                </div>
            </Form.Group>
            <div className="d-grid">
                <Button onClick={submitFilter}>Filter</Button>
            </div>
        </Form>
      </Col>
    </>
  );
};

export default ProductFilter;

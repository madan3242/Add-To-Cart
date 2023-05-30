import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductFilter = () => {
  return (
    <>
      <Col lg={3} className="productFilter">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="MIN"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="MAX"/>
                    </Form.Group>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Check type="radio" name="category" value="mens" label="MENS" />
                <Form.Check type="radio" name="category" value="womens" label="WOMENS" />
                <Form.Check type="radio" name="category" value="kids" label="KIDS" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Ratings</Form.Label>
                <div style={{cursor: "pointer"}}>
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
                <Button>Filter</Button>
            </div>
        </Form>
      </Col>
    </>
  );
};

export default ProductFilter;

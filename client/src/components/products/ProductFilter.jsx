import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const ProductFilter = ({ filter, setFilter, submitFilter, handleReset }) => {
    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = (e) => {
        if(e.target.checked){
            setFilter({
                ...filter,
                [e.target.name]: e.target.value
            })

        }
    }
  return (
    <>
        <Form onSubmit={submitFilter} onReset={handleReset}>
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
                <Form.Check type="radio" name="category" value="mobiles" label="MOBILES" onChange={handleCheckboxChange} />
                <Form.Check type="radio" name="category" value="electronics" label="ELECTRONICS" onChange={handleCheckboxChange} />
                <Form.Check type="radio" name="category" value="fashion" label="FASHION" onChange={handleCheckboxChange} />
            </Form.Group>
            <Form.Group className="mb-3 mx-auto">
                <Form.Label>Ratings</Form.Label>
                <Rating
                    className="my-2"
                    initialRating={filter.rating}
                    onChange={(value) =>
                        setFilter({ ...filter, rating: value })
                    }
                    emptySymbol={<AiOutlineStar size={30} />}
                    fullSymbol={ <AiFillStar size={30} style={{ color: "gold" }} />}
                />
            </Form.Group>
            <div className="d-grid">
                <Button type="submit">Filter</Button>&nbsp;
                <Button type="reset" variant="secondary">Clear Filter</Button>
            </div>
        </Form>
    </>
  );
};

export default ProductFilter;

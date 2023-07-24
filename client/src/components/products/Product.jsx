import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProductReview, getOneProduct } from "../../redux/product/product.action";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = () => {
  const product = useSelector((state) => state.productDetails.product.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //product id
  const { id } = useParams();

  const [addReview, setAddReview] = useState(false);
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
    productId: id
  });

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch]);

  const reviewChangeHandler = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const reviewSumitHandler = (e) => {
    e.preventDefault();
    dispatch(addProductReview(review, setAddReview))
    dispatch(getOneProduct(id));
  };

  return (
    <>
      <Container className="product-details">
        {/* {JSON.stringify(review)} */}
        {product && (
          <>
            <Row>
              <Col lg={6}>
                <Carousel>
                  {product?.photos?.map((photo) => {
                    return (
                      <Carousel.Item key={photo.id}>
                        <img src={photo?.secure_url} alt="" height="580px" />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </Col>
              <Col lg={6}>
                <Row>
                  <Breadcrumb>
                    <Breadcrumb.Item onClick={() => navigate("/")}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate("/products")}>
                      Products
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
                  </Breadcrumb>
                </Row>
                <h3>{product.brand}</h3>
                <h1>{product.name}</h1>
                <h3>&#8377;{product.price}</h3>
                <p>{product.description}</p>
                <Button size="lg" variant="secondary">
                  Add To Cart
                </Button>
                &nbsp;
                <Button size="lg">Buy Now</Button>
                <p style={{ color: "red" }}>Hurry up! {product.stocks} left</p>
                <Row className="pt-4">
                  <h3>
                    Ratings & Reviews
                    <span style={{ float: "right" }}>
                      <Button onClick={() => setAddReview(true)}>
                        Add Review
                      </Button>
                    </span>
                  </h3>
                  {addReview && (
                    <>
                      <Form className="mt-2" onSubmit={reviewSumitHandler}>
                        <Rating
                          className="my-2"
                          initialRating={review.rating}
                          onChange={(value) =>
                            setReview({ ...review, rating: value })
                          }
                          emptySymbol={<AiOutlineStar size={30} />}
                          fullSymbol={
                            <AiFillStar size={30} style={{ color: "gold" }} />
                          }
                        />
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="comment"
                          onChange={reviewChangeHandler}
                        />
                        <div className="my-2">
                          <Button type="submit">Submit</Button>&nbsp;
                          <Button
                            variant="secondary"
                            onClick={() => setAddReview(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </Form>
                    </>
                  )}
                </Row>
                <Row>
                  <h2>{product.rating} <span><AiFillStar  style={{ color: "gold" }} /></span></h2>
                </Row>
                <Row>
                  {product.reviews?.map((rev) => {
                    return <>
                    {/* {JSON.stringify(rev)} */}
                      <Card>
                        <Card.Body>
                          <Card.Title>{rev.comment}</Card.Title>
                          <Card.Text>{rev.name}</Card.Text>
                        </Card.Body>
                      </Card>
                    </>
                  })}
                </Row>
              </Col>
            </Row>
            <Row>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Product;

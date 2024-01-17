import React, { useCallback, useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
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
import ImageViewer from "react-simple-image-viewer";
import { addItemsToCart } from "../../redux/cart/cart.action";
import toast from "react-hot-toast";

const Product = () => {
  const product = useSelector((state) => state.productDetails.product.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [addReview, setAddReview] = useState(false);
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
    productId: id
  });

  const [qty, setQty] = useState(1)

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  //images for image viewer
  const images = [];
  product?.photos.forEach((photo) => {
    images.push(photo.secure_url)
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

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const addItemToCartHandler = () => {
    dispatch(addItemsToCart(id, qty))
    toast.success(`You added ${qty} ${product.name} to cart`)
  }

  const buyNowHandler = () => {
    dispatch(addItemsToCart(id, qty))
    navigate("/shipping");
  };
  return (
    <>
      <Container className="product-details">
        {product && (
          <>
            <Row>
              <Col lg={6}>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => navigate("/")}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate("/products")}>
                      Products
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
              <Col lg={6}></Col>
            </Row>
            <Row>
              <Col lg={6} >
                <Row>
                  {images?.map((photo, index) => {
                      return <Col lg={6} key={index}>
                        <img 
                          src={photo} 
                          width={"100%"} 
                          className="text-center"
                          onClick={() => openImageViewer(index)}  
                        />
                      </Col>
                  })}
                {isViewerOpen && (
                  <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                  />
                )}
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col>
                    <h3>{product.brand}</h3>
                    <h1>{product.name}</h1>
                    <h3>&#8377;{product.price} </h3>
                    <p>Inclusive of all taxes</p>
                    <p>EMI starts at ₹{Math.ceil(product.price / 24)}. No Cost EMI available.</p>
                    <h5>About this item</h5>
                    <p>{product.description}</p>
                    <p>Quantity: 
                      <span>
                        <Form.Control type="number" style={{ width: "60px"}} value={qty} onChange={(e) => setQty(e.target.value)}  />
                      </span>
                    </p> 
                    <Button size="lg" variant="secondary" onClick={addItemToCartHandler}>
                      Add To Cart
                    </Button>
                    &nbsp;
                    <Button size="lg" onClick={buyNowHandler}>
                      Buy Now
                    </Button>
                    <p style={{ color: "red" }}>
                      {product.stocks <= 5 ? `Hurry up! ${product.stocks} left` : null}
                    </p>
                  </Col>
                </Row>
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
                      <Card key={rev.name}>
                        <Card.Body>
                          <Card.Title>{rev.rating}<AiFillStar size={25} style={{ color: "gold" }} /> {rev.comment}</Card.Title>
                          <Card.Text>{rev.name}</Card.Text>
                        </Card.Body>
                      </Card>
                    </>
                  })}
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Product;

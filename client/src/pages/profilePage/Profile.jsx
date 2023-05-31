import React from "react";
import "./Profile.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineUser, AiTwotoneEdit } from "react-icons/ai";
import AddressCard from "../../components/addresscard/AddressCard";

const Profile = () => {
  return (
    <Container className="profileContainer">
      <Row className="user-profile">
        <Col lg={6} className="mx-auto">
          <Form>
            <AiTwotoneEdit style={{ float: "right" }} size={20} />
            <AiOutlineUser size={80} />

            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="2">
                Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <div style={{float: "right", display: "none"}}>
              <Button variant="primary">Edit</Button>&nbsp;
              <Button variant="secondary">Cancel</Button>
            </div>
          </Form>
        </Col>
      </Row>

      <div className="more-profile">
        <Row>
          <Col lg={3} className="side-section">
            <div className="side-section-list">
              <ul>
                <li>Address</li>
                <li>Wishlist</li>
                <li>Orders</li>
              </ul>
            </div>
          </Col>
          <Col lg={9} className="main-section">
            <AddressCard />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;

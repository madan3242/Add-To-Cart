import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineUser, AiTwotoneEdit } from "react-icons/ai";
import AddressCard from "../../components/addresscard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/auth.services";

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.user)

  const [user, setUser] = useState({
    name: userData?.name,
    email: userData?.email,
    phonenumber: userData?.phonenumber
  })

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const updateProfile = (e) => {
    e.preventDefault();
    setEdit(!edit)
    dispatch(updateUserProfile(user, setEdit))
  }
  return (
    <Container className="profileContainer">
      <Row className="user-profile">
        <Col lg={6} className="mx-auto">
          <Form>
            <AiTwotoneEdit style={{ float: "right" }} size={20} onClick={() => setEdit(!edit)} />
            <AiOutlineUser size={80} />

            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" disabled={edit} name="name" value={user?.name} onChange={handleUserChange} />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" disabled={edit} name="email" value={user?.email} onChange={handleUserChange} />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="2">
                Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" disabled={edit} name="phonenumber" value={user?.phonenumber} onChange={handleUserChange} />
              </Col>
            </Form.Group>
            {!edit &&
              <div style={{float: "right"}}>
                <Button variant="primary" onClick={updateProfile}>Save</Button>&nbsp;
                <Button variant="secondary" onClick={() => setEdit(!edit)}>Cancel</Button>
              </div>
            }
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

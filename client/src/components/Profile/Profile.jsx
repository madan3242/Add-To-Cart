import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineUser, AiTwotoneEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/user/user.action";

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
  
    const handleUpdate = (e) => {
      e.preventDefault();
      setEdit(!edit)
      dispatch(updateProfile(user, setEdit))
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
                  {!edit ? 
                    <Form.Control type="text" name="name" value={user?.name} onChange={handleUserChange} />
                    : <div style={{ paddingTop: "7px"}}>{user?.name}</div>
                  }
                </Col>
              </Form.Group>
  
              <Form.Group className="mb-3" as={Row}>
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  {!edit ?
                    <Form.Control type="text" name="email" value={user?.email} onChange={handleUserChange} />
                    : <div style={{ paddingTop: "7px"}}>{user?.email}</div>
                  }
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" as={Row}>
                <Form.Label column sm="2">
                  Phone
                </Form.Label>
                <Col sm="10">
                  {!edit ? <Form.Control type="text" name="phonenumber" value={user?.phonenumber} onChange={handleUserChange} /> : <div style={{ paddingTop: "7px"}}>{user?.phonenumber}</div>
                  }
                </Col>
              </Form.Group>
              {!edit &&
                <div style={{float: "right"}}>
                  <Button variant="primary" onClick={handleUpdate}>Save</Button>&nbsp;
                  <Button variant="secondary" onClick={() => setEdit(!edit)}>Cancel</Button>
                </div>
              }
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Profile;
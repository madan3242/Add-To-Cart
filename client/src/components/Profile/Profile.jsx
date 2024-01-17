import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, updateProfile } from "../../redux/user/user.action";
import toast from "react-hot-toast"
import MyOrders from "./MyOrders";
import Loader from "../Loader/Loader";

const Profile = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.user);
    const [edit, setEdit] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const [user, setUser] = useState({
      name: userData?.name,
      email: userData?.email,
      phonenumber: userData?.phonenumber
    });

    const initialPasswords = {
      currentPassword: "",
      newPassword: "",
      reNewPassword: "",
    };
    const [passwords, setPasswords] = useState(initialPasswords);
  
    const handleUserChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    };

    const handlePasswordChange = (e) => {
      setPasswords({
        ...passwords,
        [e.target.name]: e.target.value
      })
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateProfile(user, setEdit, toast, setLoading))
    };

    const toggleChangePassword = () => {
      setChangePassword(!changePassword)
    };

    const handlePasswordSubmit = (e) => {
      e.preventDefault();
      let data = {
        oldPassword: passwords.currentPassword,
        password: passwords.newPassword
      }
      if(passwords.newPassword.length > 0 &&  passwords.reNewPassword.length > 0){
        if(passwords.newPassword === passwords.reNewPassword){          
          dispatch(updatePassword(data, toggleChangePassword, setLoading))
          setPasswords(initialPasswords);
        } else {
          toast("Passwords don't match")
        }
      } else {
        toast("Please Enter Passwords")
      }
    };

    return (
      <Container className="profileContainer">
        <Row className="user-profile">
          <Col lg={3} className="side-section">
            <div className="side-section-list">
              <ul>
                <li onClick={() => { setEdit(false); setChangePassword(false); setPasswords(initialPasswords) }}>My Profile</li>
                <li onClick={() => { setEdit(true); setChangePassword(false); setPasswords(initialPasswords) }}>Update Profile</li>
                <li onClick={() => { setEdit(false); setChangePassword(true); }}>Change Password</li>
              </ul>
            </div>
          </Col>
          <Col lg={9} className="main-section" >
            {
              !changePassword ? <>
                <Form>
                  {edit && <h2 className="m-2">Update Profile</h2>}
                  {!edit && <AiOutlineUser size={70} />}
                  <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="7">
                      {edit ? 
                        <Form.Control type="text" name="name" value={user?.name} onChange={handleUserChange} />
                        : <div style={{ paddingTop: "7px"}}>{user?.name}</div>
                      }
                    </Col>
                  </Form.Group>
      
                  <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="7">
                      {edit ?
                        <Form.Control type="text" name="email" value={user?.email} onChange={handleUserChange} />
                        : <div style={{ paddingTop: "7px"}}>{user?.email}</div>
                      }
                    </Col>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm="2">Phone</Form.Label>
                    <Col sm="7">
                      {edit ? 
                        <Form.Control type="text" name="phonenumber" value={user?.phonenumber} onChange={handleUserChange} /> 
                        : <div style={{ paddingTop: "7px"}}>{user?.phonenumber}</div>
                      }
                    </Col>
                  </Form.Group>
                  {edit &&
                    <div style={{float: "right"}}>
                      <Button variant="primary" onClick={handleUpdate}>{loading ? <Loader size={'sm'}/> : 'Save'}</Button>&nbsp;
                      <Button variant="secondary" onClick={() => setEdit(false)}>Cancel</Button>
                    </div>
                  }
                </Form>
              </> : <>
                <Form>
                  <h2 className="m-2">Change Password</h2>
                  <Form.Group className="mb-3" as={Row}>
                      <Form.Label column sm="3">
                        Current Password
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control type="password" name="currentPassword" value={passwords.currentPassword} onChange={handlePasswordChange} />
                      </Col>
                    </Form.Group>
                  <Form.Group className="mb-3" as={Row}>
                      <Form.Label column sm="3">
                        New Password
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control type="password" name="newPassword" value={passwords.newPassword} onChange={handlePasswordChange} />
                      </Col>
                    </Form.Group>
                  <Form.Group className="mb-3" as={Row}>
                      <Form.Label column sm="3">
                        Re-enter New Password
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control type="password" name="reNewPassword" value={passwords.reNewPassword} onChange={handlePasswordChange} />
                      </Col>
                    </Form.Group>
                    <Button onClick={handlePasswordSubmit}>{loading ? <Loader size={'sm'}/>:'Change Password'}</Button> &nbsp;
                    <Button 
                      variant="secondary" 
                      onClick={() => {
                        setChangePassword(false); setEdit(false); setPasswords(initialPasswords)
                      }}
                    >
                      Cancel
                    </Button>
                </Form>
              </>
            }
          </Col>
        </Row>
        <Row>
          <MyOrders />
        </Row>
      </Container>
    );
  };
  
  export default Profile;
import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, updateProfile } from "../../redux/user/user.action";
import { toast } from "react-toast"

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.user)
  
    const [user, setUser] = useState({
      name: userData?.name,
      email: userData?.email,
      phonenumber: userData?.phonenumber
    })

    const [passwords, setPasswords] = useState({
      currentPassword: "",
      newPassword: "",
      reNewPassword: "",
    })
  
    const handleUserChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    }

    const handlePasswordChange = (e) => {
      setPasswords({
        ...passwords,
        [e.target.name]: e.target.value
      })
    }
  
    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateProfile(user, setEdit))
    }

    const toggleChangePassword = () => {
      setChangePassword(!changePassword)
    }

    const handlePasswordSubmit = (e) => {
      e.preventDefault();
      console.log(changePassword);
      let data = {
        oldPassword: passwords.currentPassword,
        password: passwords.newPassword
      }

      if(passwords.newPassword.length >= 0 &&  passwords.reNewPassword >= 0){
        if(passwords.newPassword === passwords.reNewPassword){
          dispatch(updatePassword(data, toggleChangePassword))
        } else {
          // toast("Passwords don't match")
          alert("Passwords don't match")
        }
      }
    }
    
    return (
      <Container className="profileContainer">
        {/* {JSON.stringify(passwords)} */}
        <Row className="user-profile">
          <Col lg={3} className="side-section">
            <div className="side-section-list">
              <ul>
                <li>Profile</li>
                <li onClick={() => setEdit(true)}>Update</li>
                <li onClick={() => setChangePassword(!changePassword)}>Change Password</li>
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
                    <Form.Label column sm="2">
                      Name
                    </Form.Label>
                    <Col sm="7">
                      {edit ? 
                        <Form.Control type="text" name="name" value={user?.name} onChange={handleUserChange} />
                        : <div style={{ paddingTop: "7px"}}>{user?.name}</div>
                      }
                    </Col>
                  </Form.Group>
      
                  <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="7">
                      {edit ?
                        <Form.Control type="text" name="email" value={user?.email} onChange={handleUserChange} />
                        : <div style={{ paddingTop: "7px"}}>{user?.email}</div>
                      }
                    </Col>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm="2">
                      Phone
                    </Form.Label>
                    <Col sm="7">
                      {edit ? <Form.Control type="text" name="phonenumber" value={user?.phonenumber} onChange={handleUserChange} /> : <div style={{ paddingTop: "7px"}}>{user?.phonenumber}</div>
                      }
                    </Col>
                  </Form.Group>
                  {edit &&
                    <div style={{float: "right"}}>
                      <Button variant="primary" onClick={handleUpdate}>Save</Button>&nbsp;
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
                          <Form.Control type="password" name="currentPassword" onChange={handlePasswordChange} />
                      </Col>
                    </Form.Group>
                  <Form.Group className="mb-3" as={Row}>
                      <Form.Label column sm="3">
                        New Password
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control type="password" name="newPassword" onChange={handlePasswordChange} />
                      </Col>
                    </Form.Group>
                  <Form.Group className="mb-3" as={Row}>
                      <Form.Label column sm="3">
                        Re-enter New Password
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control type="password" name="reNewPassword" onChange={handlePasswordChange} />
                      </Col>
                    </Form.Group>
                    <Button onClick={handlePasswordSubmit}>Change Password</Button> &nbsp;
                    <Button variant="secondary" onClick={() => setChangePassword(false)}>Cancel</Button>
                </Form>
              </>
            }
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Profile;
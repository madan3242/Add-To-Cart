import React, { useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../../../redux/user/user.action'

const User = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <>
      <Row>
        <h2>Users</h2>
      </Row>
      <Row style={{ margin: "1rem"}}>
      <Table striped bordered hover >
            <thead>
              <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Update/Delete</th>
              <th>Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.length > 0 ? <>{
                  users.map((user) => {
                    return <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phonenumber}</td>
                      <td>{user.role}</td>
                      <td>
                        <AiOutlineEdit size={20} />
                      </td>
                      <td>
                        <AiOutlineDelete size={20} />
                      </td>
                    </tr>
                  })
                }</> : null
              }
            </tbody>
          </Table>
      </Row>
    </>
  );
};

export default User;

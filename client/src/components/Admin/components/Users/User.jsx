import React from "react";
import { Row, Table } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector((state) => state.users);
  return (
    <>
      <Row>
        <h2>Users</h2>
      </Row>
      <Row style={{ margin: "1rem"}}>
      <Table striped bordered hover variant="secondary">
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
              <tr>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>
                  <AiOutlineEdit size={20} />
                  {/* <AiOutlineDelete size={20} /> */}
                </td>
                <td>
                  {/* <AiOutlineEdit size={20} /> */}
                  <AiOutlineDelete size={20} />
                </td>
              </tr>
              {
                users?.length > 0 ? <>{
                  users.map((product) => {
                    return <tr>
                      <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.phone}</td>
                      <td>{users.role}</td>
                      <td>
                        <AiOutlineEdit size={20} />
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

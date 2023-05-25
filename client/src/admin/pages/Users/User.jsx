import React from "react";
import { Row, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

const User = () => {
  return (
    <>
      <Row>
        <h2>Users</h2>
      </Row>
      <Row style={{ margin: "1rem"}}>
        <Table striped bordered hover style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td><AiOutlineDelete size={20} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default User;

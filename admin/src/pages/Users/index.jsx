import { useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/user/user.action'
import UserRow from "../../components/Users/UserRow";

const User = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
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
              <th className="text-center">Update</th>
              <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.length > 0 ? <>{
                  users.map((user) => {
                    return <UserRow key={user.id} user={user} />
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

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { adminDeleteUser, adminUpdateUser, getAllUsers } from "../../redux/user/user.action";
import { useDispatch } from 'react-redux';

const UserRow = ({ user }) => {
  const [edit, setEdit] = useState(false);
  const [role, setRole] = useState(user.role);
  const dispatch = useDispatch()

  const handleEdit = () => {
    const data = {
      role
    }
    dispatch(adminUpdateUser(user._id, data, setEdit))
    dispatch(getAllUsers())
  }

  const handleDelete = () => {
    dispatch(adminDeleteUser(user._id))
    dispatch(getAllUsers())
  }

  return (
    <>
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phonenumber}</td>
        <td>
          {edit ? (
            <>
              <Form.Control type="text" value={role} onChange={(e) => setRole(e.target.value)} width={"100px"} />
            </>
          ) : (
            <>{user.role}</>
          )}
        </td>
        <td className="text-center">
          {edit ? (
            <>
                <AiOutlineCheck onClick={handleEdit} />&nbsp;&nbsp;
                <AiOutlineClose onClick={() => setEdit(false)} />
            </>
          ) : (
            <>
              <AiOutlineEdit size={20} onClick={() => setEdit(!edit)} />
            </>
          )}
        </td>
        <td className="text-center">
          <AiOutlineDelete size={20} onClick={handleDelete} />
        </td>
      </tr>
    </>
  );
};

export default UserRow;

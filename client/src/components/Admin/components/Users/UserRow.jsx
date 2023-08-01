import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

const UserRow = ({ user }) => {
  const [edit, setEdit] = useState(false);

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
              <Form.Control type="text" value={user.role} width={"100px"} />
            </>
          ) : (
            <>{user.role}</>
          )}
        </td>
        <td className="text-center">
          {edit ? (
            <>
                <AiOutlineCheck />&nbsp;&nbsp;
                <AiOutlineClose onClick={() => setEdit(false)} />
            </>
          ) : (
            <>
              <AiOutlineEdit size={20} onClick={() => setEdit(!edit)} />
            </>
          )}
        </td>
        <td className="text-center">
          <AiOutlineDelete size={20} />
        </td>
      </tr>
    </>
  );
};

export default UserRow;

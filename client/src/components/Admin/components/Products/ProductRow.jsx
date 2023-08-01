import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

const ProductRow = ({ product }) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <tr key={product._id}>
        <td>{product._id}</td>
        {edit ? (
          <>
            <td>
              <Form.Control type="text" value={product.name} />
            </td>
            <td>
              <Form.Control type="text" value={product.price} />
            </td>
            <td>
              <img src={product.photos[0].secure_url} height={100} alt="" />
            </td>
            <td>
              <Form.Control type="text" value={product.category} />
            </td>
            <td>
              <Form.Control type="text" value={product.brand} />
            </td>
            <td>
              <Form.Control type="text" value={product.stocks} />
            </td>

            <td className="text-center">
              <AiOutlineCheck /> &nbsp;
              <AiOutlineClose onClick={() => setEdit(false)} />
            </td>
            <td className="text-center">
              <AiOutlineDelete size={20} />
            </td>
          </>
        ) : (
          <>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.photos[0].secure_url} height={100} alt="" />
            </td>
            <td>{product.category}</td>
            <td>{product.brand}</td>
            <td>{product.stocks}</td>

            <td className="text-center">
              <AiOutlineEdit size={20} onClick={() => setEdit(true)} />
            </td>
            <td className="text-center">
              <AiOutlineDelete size={20} />
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default ProductRow;

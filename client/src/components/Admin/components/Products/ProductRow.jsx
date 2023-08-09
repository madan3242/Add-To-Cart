import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../../../redux/product/product.action";

const ProductRow = ({ product }) => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(product);
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(updateProduct(product._id, update, setEdit))
    dispatch(getAdminProducts())
  }

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value
    })
  }

  const handleDelete = () => {
    dispatch(deleteProduct(product._id))
    dispatch(getAdminProducts())
  }

  return (
    <>
      <tr key={product._id}>
        <td>{product._id}</td>
        {edit ? (
          <>
            <td>
              <Form.Control type="text" value={update.name} name="name" onChange={handleChange} />
            </td>
            <td>
              <Form.Control type="text" value={update.price} name="price" onChange={handleChange} />
            </td>
            <td>
              <img src={product.photos[0].secure_url} height={100} alt="" />
            </td>
            <td>
              <Form.Control type="text" value={update.category} name="category" onChange={handleChange} />
            </td>
            <td>
              <Form.Control type="text" value={update.brand} name="brand" onChange={handleChange} />
            </td>
            <td>
              <Form.Control type="text" value={update.stocks} name="stocks" onChange={handleChange} />
            </td>

            <td className="text-center">
              <AiOutlineCheck onClick={handleEdit} /> &nbsp;
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
              <AiOutlineDelete size={20} onClick={handleDelete} />
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default ProductRow;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { adminOrders, deleteOrder, updateOrder } from "../../../../redux/order/order.action";

const OrderRow = ({ order }) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(order.orderStatus);
  const dispatch = useDispatch()

  const handleEdit = () => {
    const data = {
      orderStatus: status
    }
    dispatch(updateOrder(order._id, data, setEdit))
    dispatch(adminOrders())
  }

  const handleDelete = () => {
    dispatch(deleteOrder(order._id))
    dispatch(adminOrders())
  }

  return (
    <>
      <tr key={order?._id}>
        <td>{order?._id}</td>
        <td>{`${order?.shippingInfo?.address}, ${order?.shippingInfo?.city}, ${order?.shippingInfo?.state}, ${order?.shippingInfo?.country} - ${order?.shippingInfo?.pinCode}`}</td>
        <td>{order?.shippingInfo?.phoneNo}</td>
        <td>{order?.paymentInfo?.id}</td>
        <td>{order?.paymentInfo?.status}</td>
        <td>{order?.taxAmount}</td>
        <td>{order?.shippingAmount}</td>
        <td>{order?.totalAmount}</td>
        <td>
          {edit ? (
            <>
              <Form.Control
                type="text"
                value={status}
                width={"100px"}
                onChange={(e) => setStatus(e.target.value)}
              />
            </>
          ) : (
            <>{order?.orderStatus}</>
          )}
        </td>
        <td>
          {edit ? (
            <>
              <AiOutlineCheck onClick={handleEdit} />
              &nbsp;&nbsp;
              <AiOutlineClose onClick={() => setEdit(false)} />
            </>
          ) : (
            <>
              <AiOutlineEdit size={20} onClick={() => setEdit(!edit)} />
            </>
          )}
        </td>
        <td>
          <AiOutlineDelete size={20} onClick={handleDelete} />
        </td>
      </tr>
    </>
  );
};

export default OrderRow;

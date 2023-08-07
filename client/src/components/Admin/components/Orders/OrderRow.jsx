import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

const OrderRow = ({ order }) => {
  const [edit, setEdit] = useState(false);

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
                value={order?.orderStatus}
                width={"100px"}
              />
            </>
          ) : (
            <>{order?.orderStatus}</>
          )}
        </td>
        <td>
          {edit ? (
            <>
              <AiOutlineCheck />
              &nbsp;&nbsp;
              <AiOutlineClose onClick={() => setEdit(false)} />
            </>
          ) : (
            <>
              <AiOutlineEdit size={20} onClick={() => setEdit(!edit)} />
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderRow;

import React, { useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminOrders } from "../../../../redux/order/order.action";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { orders } = useSelector((state) => state.orders.orders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminOrders());
  }, [dispatch]);
  return (
    <>
      <Row>
        <h2>Orders</h2>
      </Row>
      <Row style={{ margin: "1rem" }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Shipping Info</th>
              <th>Phone No</th>
              <th>Payment ID</th>
              <th>Payment Status</th>
              <th>Tax</th>
              <th>Shipping Amount</th>
              <th>Total Amount</th>
              <th>Order Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                return <OrderRow order={order} key={order?._id} />;
              })}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default Orders;

import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { myOrders } from "../../redux/order/order.action";
import { useNavigate } from 'react-router-dom'

const MyOrders = () => {
  const { orders } = useSelector((state) => state.orders.orders);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);
  
  return (
    <Col lg className="user-orders" style={{ margin: "2% 0", padding: "2%" }}>
      <Row>
        <Col>
          <h2>My Orders</h2>
        </Col>
      </Row>
      <Row>
        <Col lg>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Orders</th>
                <th>Address</th>
                <th>Payment Status</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => {
                  return (
                    <tr key={order._id}>
                      <td>
                        {order.orderItems.map((item) => {
                            return <td onClick={() => navigate(`/product/${item.product}`)} style={{ cursor: "pointer"}}><img src={item.image} height={100} alt="" /></td>
                            
                        })}
                      </td>
                      <td>{`${order?.shippingInfo?.address}, ${order?.shippingInfo?.city}, ${order?.shippingInfo?.state}, ${order?.shippingInfo?.country} - ${order?.shippingInfo?.pinCode} `}</td>
                        <td>{order?.paymentInfo?.status}</td>
                        <td>{order?.orderStatus}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
};

export default MyOrders;

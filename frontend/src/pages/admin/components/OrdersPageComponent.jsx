import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinkComponents from "../../../Component/admin/AdminLinkComponents";
import { useEffect, useState } from "react";
import { logout } from "../../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

const OrdersPageComponent = ({ getOrders }) => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch(() => dispatch(logout()));
  }, [getOrders, dispatch]);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkComponents />
      </Col>
      <Col md={10}>
        <h1>Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id || idx}>
                <td>{idx + 1}</td>
                <td>
                  {order.user ? (
                    <>
                      {order.user.name} {order.user.lastName}
                    </>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>
                <td>{order.orderTotal?.cartSubtotal || "N/A"}</td>
                <td>
                  {order.isDelivered ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                  )}
                </td>
                <td>{order.paymentMethod || "N/A"}</td>
                <td>
                  <Link to={`/admin/ordersdetails/${order._id}`}>go to order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default OrdersPageComponent;

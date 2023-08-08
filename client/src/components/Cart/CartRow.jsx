import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux/cart/cart.action";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartRow = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseQuantity = (id, qty, stocks) => {
    const newQty = parseInt(qty) + 1;
    console.log("Quantity: " + qty);
    console.log("New Quantity: " + newQty);
    if (stocks <= qty) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, qty) => {
    const newQty = qty - 1;
    if (1 >= qty) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeItemsFromCart(id));
    toast.error(`${item.name} removed from the cart`)
  };

  return (
    <tr className="text-center">
      <td onClick={() => navigate(`/product/${item.product}`)} style={{ cursor: "pointer" }}>
        <img src={item.image} alt="" height={100} />
      </td>
      <td>{item.name}</td>
      <td>
        <Button
          variant="null"
          onClick={() => decreaseQuantity(item.product, item.quantity)}
        >
          -
        </Button>
        {item.quantity}
        <Button
          variant="null"
          onClick={() =>
            increaseQuantity(item.product, item.quantity, item.stocks)
          }
        >
          +
        </Button>
      </td>
      <td>{item.price * item.quantity}</td>
      <td>
        <AiOutlineDelete
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => removeCartItemHandler(item.product)}
        />
      </td>
    </tr>
  );
};

export default CartRow;

import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>Increase</button>
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>Decrease</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;

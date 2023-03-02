import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";

import { useContext,useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const [cokeCount, setCokeCount] = useState(0);
  
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    if (item.name === "Coca-Cola") {
      setCokeCount((prevCount) => prevCount + 1);
    }
    cartCtx.additem(item);
  };

  const handleCokeOffer = () => {
    // Calculate the number of free Coca-Cola cans based on the current count
    const freeCokes = Math.floor(cokeCount / 6);

    // Add the free cans to the cart
    for (let i = 0; i < freeCokes; i++) {
      cartCtx.additem({
        id: 'm10'
      });
    }
  };

  const handleCroissantOffer = () => {
    // Find the number of croissants in the cart
    const croissantCount = cartCtx.items.reduce(
      (count, item) => (item.name === "Croissant" ? count + item.amount : count),
      0
    );

    // If there are at least 3 croissants, add a free coffee to the cart
    if (croissantCount >= 3) {
      cartCtx.additem({
        id: 'm9'
      });
    }
  };


  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={classes.offers}>
      <button onClick={handleCokeOffer}>Buy 6 cans of Coca-Cola, and get one free</button><br></br>
      <button onClick={handleCroissantOffer}>Buy 3 croissants and get a free coffee</button>
    </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

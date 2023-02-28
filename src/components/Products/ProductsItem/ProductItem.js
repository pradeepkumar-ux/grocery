import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.product}>
      <div className={classes.card}>
        <div className={classes.pic}>
          <img src={props.img} alt="no-pic" />
        </div>
        <div className={classes.details}>
          <h3>{props.name}</h3>
          <div className={classes.price}>{price}</div>
          <div className={classes.rating} style={{ color: props.rating > 3.5 ? 'green' : 'red' }}>Rating {props.rating}</div>
          <div className={classes.available} style={{ color: props.available >= 10 ? 'green' : 'red' }}>Available {props.available}</div>
        </div>
        <div className={classes.btn}>
          <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;

import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  cokeOffer: false,
  croissantOffer: false,
  applyCokeOffer: () => {},
  applyCroissantOffer: () => {}
});

export default CartContext;
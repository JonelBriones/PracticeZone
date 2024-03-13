import { BsCart } from "react-icons/bs";

import { StoreProps } from "../pages/Store";
import { useState } from "react";
import Item from "./Item";

const Navbar = ({ cartItems }: StoreProps) => {
  const cartQty = cartItems.reduce(
    (value: number, currentVal: { qty: number }) => value + currentVal.qty,
    0
  );

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="navbar">
      <ul className="navbar-left">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <ul className="navbar-left">
        {cartOpen ? (
          cartItems.map((item) => (
            <div>
              <Item {...item} />
            </div>
          ))
        ) : (
          <li className="cart" onClick={() => setCartOpen(true)}>
            <BsCart className="cart-btn" size="1.2rem" />
            {cartQty}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

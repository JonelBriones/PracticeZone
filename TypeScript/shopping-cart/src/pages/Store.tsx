import { useState } from "react";
import items from "../data/items.json";
import Navbar from "../components/Navbar";

export type CartItem = {
  id: number;
  qty: number;
};

export type Item = {
  id: number;
  name: string;
  price: number;
};

export interface StoreProps {
  // addToCart: (id: number) => void;
  // addTremoveFromCartoCart: (id: number) => void;
  // deleteFromCart: (id: number) => void;
  cartItems: CartItem[];
}

const Store = () => {
  const [cartItems, setCart] = useState<CartItem[]>([]);
  function addToCart(id: number) {
    let addQty = cartItems.find((item) => item.id == id);
    if (addQty) {
      setCart(
        cartItems.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cartItems, { id, qty: 1 }]);
    }
  }
  function removeFromCart(id: number) {
    const item = cartItems.find((item) => item.id == id);
    if (item?.qty! >= 1) {
      setCart(
        cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    } else {
      setCart(cartItems.filter((item) => item.id !== id));
    }
  }
  function deleteFromCart(id: number) {
    setCart(cartItems.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Navbar cartItems={cartItems} />
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} ${item.price}
          </p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove from cart
          </button>
          <button onClick={() => addToCart(item.id)}>Add to cart</button>
          <button onClick={() => deleteFromCart(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Store;

import items from "../data/items.json";

import { CartItem } from "../pages/Store";

const Item = ({ id }: CartItem) => {
  console.log(id);
  const itemInCart = items.find((i) => (i.id == id ? i : null));
  return <div>{itemInCart?.name}</div>;
};

export default Item;

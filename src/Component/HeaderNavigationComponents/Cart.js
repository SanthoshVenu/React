// import SubCategories from "../Restaurant/SubCategroies";
import { useSelector } from "react-redux";
import AccordianMenu from "../Restaurant/AccoridianMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <h1>Cart Items</h1>
      <button>Clear Cart</button>
      {cartItems?.map((item) => (
        <AccordianMenu itemData={item} />
      ))}
    </div>
  );
};

export default Cart;

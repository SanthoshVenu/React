// import SubCategories from "../Restaurant/SubCategroies";
import { useSelector, useDispatch } from "react-redux";
import { addItems, clearItem } from "../../Utils/ReduxStore/Slices/cartSlice";
import AccordianMenu from "../Restaurant/AccoridianMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  var dispatch = useDispatch();
  const clearCart = () => {
    console.log("Clear Cart");
    dispatch(clearItem());
  };
  return (
    <div>
      <h1>Cart Items</h1>
      <button className="border-2" onClick={clearCart}>
        Clear Cart
      </button>
      {cartItems?.map((item) => (
        <AccordianMenu key={item.name} itemData={item} />
      ))}
    </div>
  );
};

export default Cart;

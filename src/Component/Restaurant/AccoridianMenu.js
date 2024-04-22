import { useDispatch } from "react-redux";
import { addItems } from "../../Utils/ReduxStore/Slices/cartSlice";

const AccordianMenu = ({ itemData }) => {
  const dispatch = useDispatch();
  const handleDispatch = (item) => {
    dispatch(addItems(item));
  };
  const MENU_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const { name, description, imageId, price, defaultPrice } = itemData;

  return (
    <div className="flex w-6/12 justify-center items-center">
      <div>
        <li>{name}</li> <li>{price != undefined ? price : defaultPrice}</li>
        <li>{description}</li>
      </div>
      ~
      <div>
        <button
          onClick={() => handleDispatch(itemData)}
          className=" font-bold text-white rounded-lg w-auto bg-black colo relative left-[5rem] top-8"
        >
          Add +
        </button>
        <img src={MENU_IMG_URL + imageId}></img>
      </div>
    </div>
  );
};
export default AccordianMenu;

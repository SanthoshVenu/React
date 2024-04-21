const AccordianMenu = ({ itemData }) => {
  const MENU_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const { name, description, imageId, price } = itemData;
  console.log("AccordianMenu", itemData);

  return (
    <div>
      <li>{name}</li>
      <li>{description}</li>
      <img src={MENU_IMG_URL + imageId}></img>
      <li>{price}</li>
    </div>
  );
};
export default AccordianMenu;

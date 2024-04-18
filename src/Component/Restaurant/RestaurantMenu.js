import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  console.log(resData);
  return <div>{resData}</div>;
};

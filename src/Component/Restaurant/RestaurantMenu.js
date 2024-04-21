import React from "react";
import { useParams } from "react-router-dom";
import MenuCategoryList from "./MenuCategoryList";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  var masterCards = resData?.cards?.filter(
    (x) =>
      x?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  if (masterCards) {
    masterCards = masterCards
      .filter((x) => x.card.card != null)
      .map((x) => x.card.card);
  }

  return (
    <div>
      {masterCards?.map((card) => (
        <MenuCategoryList key={card?.title} cardData={card} />
      ))}
    </div>
  );
};

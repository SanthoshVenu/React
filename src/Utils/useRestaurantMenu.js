import { useState, useEffect } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  let groupedCards = resInfo?.data.cards?.filter((card) =>
    Object.keys(card).includes("groupedCard")
  )[0]?.groupedCard?.cardGroupMap?.REGULAR;
  return groupedCards;
  // return groupedCards.cards.filter(
  //   (card) =>
  //     card.card["@type"] ==
  //     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  // );
  return resInfo?.data.cards["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
};

export default useRestaurantMenu;

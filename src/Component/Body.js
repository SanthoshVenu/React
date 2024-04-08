import RestaurantCard from "../Component/RestaurantCard";
import SearchBar from "../Component/SearchBar";
import { MOCK_RESTAURANT_DATA } from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    MOCK_RESTAURANT_DATA[0]
  );

  function HandelDataFromChild(name) {
    if (name != "") {
      const filterByInputText = {
        ...listOfRestaurants,
        imageGridCards: {
          ...listOfRestaurants.imageGridCards,
          info: listOfRestaurants.imageGridCards.info.filter((x) =>
            x.action.text.includes(name)
          ),
        },
      };
      setListOfRestaurants(filterByInputText);
    } else {
      setListOfRestaurants(MOCK_RESTAURANT_DATA[0]);
    }
  }
  return (
    <div className="body">
      <div className="searchBar">
        <SearchBar parentCallBack={HandelDataFromChild} />
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredData = {
              ...listOfRestaurants,
              imageGridCards: {
                ...listOfRestaurants.imageGridCards,
                info: listOfRestaurants.imageGridCards.info.filter(
                  (a) => a.id > 750000
                ),
              },
            };
            setListOfRestaurants(filteredData);
          }}
        >
          Sort By Descending Order
        </button>
        <button
          onClick={() => {
            setListOfRestaurants(MOCK_RESTAURANT_DATA[0]);
          }}
        >
          Return To Original List
        </button>
      </div>
      <RestaurantCard cardData={listOfRestaurants} />
    </div>
  );
};

export default Body;

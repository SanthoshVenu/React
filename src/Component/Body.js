import RestaurantCard from "./Restaurant/RestaurantCard";
import SearchBar from "./Restaurant/SearchBar";
import { MOCK_RESTAURANT_DATA } from "../Utils/mockData";
import { useState, useEffect, useContext } from "react";
import UserContext from "../Utils/UserContext";
import ShimmerUI from "./Restaurant/SimmerUI";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [copyListOfRestaurants, setCopyListOfRestaurants] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[0]?.card.card);
    setCopyListOfRestaurants(json?.data?.cards[0]?.card.card);
  };

  function HandelDataFromChild(name) {
    if (name != "") {
      const filterByInputText = {
        ...copyListOfRestaurants,
        imageGridCards: {
          ...copyListOfRestaurants.imageGridCards,
          info: copyListOfRestaurants.imageGridCards.info.filter((x) =>
            x.action.text.toLowerCase().includes(name.toLowerCase())
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

      <div>
        <input
          className="border-10 "
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <RestaurantCard cardData={listOfRestaurants} />
    </div>
  );
};

export default Body;

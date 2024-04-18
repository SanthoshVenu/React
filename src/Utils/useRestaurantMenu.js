import { useState, useEffect } from "react";
import { DOC_FACT_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DOC_FACT_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo?.facts;
};

export default useRestaurantMenu;

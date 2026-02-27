


import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, [resId]);

  async function fetchMenuData() {
    try {
      const swiggyUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.775185&lng=86.17815&restaurantId=${resId}&submitAction=ENTER`;

      const response = await fetch(
        `https://proxy.corsfix.com/?${swiggyUrl}`
      );

      const text = await response.text();

      if (!text.trim()) {
        throw new Error("Empty response");
      }

      const json = JSON.parse(text);

      console.log("Full JSON================================%%:", json);

 
      setMenuData(json);

    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  return menuData;
};

export default useRestaurantMenu;
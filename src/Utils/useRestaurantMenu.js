// import { useEffect, useState } from "react";

// const useRestaurantMenu = (resId) => {
//   const [menuData, setMenuData] = useState(null);
//   const [restData, setResData] = useState([]);


//   useEffect(() => {
//     fetchMenuData(resId);
//   }, []);

//   async function fetchMenuData(resId) {
//     try {
//       const swiggyUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.775185&lng=86.17815&restaurantId=${resId}&submitAction=ENTER`;

//       const data = await fetch(`https://proxy.corsfix.com/?${swiggyUrl}`, {
//         headers: {
//           "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         method: "GET",
//       });

//       // 🔴 Step 1: Check if response is OK
//       // console.log("Status:", data.status);
//       // console.log("Status Text:", data.statusText);

//       // 🔴 Step 2: Read raw text BEFORE parsing
//       const text = await data.text();
//       // console.log("Raw Response:", text);

//       // 🔴 Step 3: Only parse if text is not empty
//       if (!text || text.trim() === "") {
//         throw new Error("Empty response from server");
//       }

//       const json = JSON.parse(text);
//       console.log("JSON data*****************************", json);
//       // console.log(
//       //   "Parsed JSON data---:",
//       //   json?.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
//       //     .itemCards,
//       // );
//       // return json;
//       setMenuData(
//         json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//           ?.card?.itemCards,
//       );
//       setResData(json?.data?.cards[2]?.card?.card?.info);
//     } catch (error) {
//       console.log("Error:", error.message);
//     }
//   }

//   return {menuData, restData}
// };

// export default useRestaurantMenu;


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

      console.log("Full JSON:", json);

      // ✅ Store FULL JSON
      setMenuData(json);

    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  return menuData;
};

export default useRestaurantMenu;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, [resId]);
  let URL = "https://world.openfoodfacts.org/api/v0/product/737628064502.json"

  async function fetchRestaurantData() {
    try {
      const swiggyUrl = `URL`;

      const response = await fetch(
        `https://corsproxy.io/?${encodeURIComponent(swiggyUrl)}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("HTTP Error:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Data:", data);
      setRestaurant(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <div>
      <h1>Restaurant page : {resId}</h1>
      {restaurant ? (
        <pre>{JSON.stringify(restaurant, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestaurantPage;
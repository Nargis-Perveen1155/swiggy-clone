import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!menu) {
    return <h1 style={{ padding: "200px" }}>Loading...</h1>;
  }

  // restro info
  const restData =
    menu?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card
      ?.info;

 // for menu card
  const regularCard = menu?.data?.cards?.find(
    (card) => card?.groupedCard
  );

  const categories =
    regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="res-detail-wrapper">
        <div className="res-detail-box">
          <h1 className="res-name">{restData?.name}</h1>

          <div className="res-detail-box1">
            <h4>
              <span className="green-star">★</span>
              {restData?.avgRating}
              <span className="dot">●</span> (
              {restData?.totalRatingsString})
            </h4>

            <h4 style={{ marginTop: "10px" }}>
              Cost for two : ₹{restData?.costForTwo / 100}
            </h4>

            <h5 className="cuisine">
              Cuisine : {restData?.cuisines?.join(", ")}
            </h5>

            <h4 className="outlet">{restData?.areaName}</h4>
            <h4 className="delivery">30 - 40 mins</h4>

            <hr />
          </div>
        </div>
      </div>

      {/* ✅ Accordion (Your UI + Working Logic) */}
      {categories.map((category, index) => (
        <RestCategory
          key={category?.card?.card?.categoryId}
          category={category?.card?.card}
          setIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
          showItems={index === showIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantPage;








// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../Utils/useRestaurantMenu";
// import RestCategory from "./RestCategory";
// import { useState } from "react";

// const RestaurantPage = () => {
//   const { resId } = useParams();
//   const menu = useRestaurantMenu(resId);
//   const [showIndex, setShowIndex] = useState(null);

//   if (!menu) {
//     return <h1 style={{ padding: "200px" }}>Loading...</h1>;
//   }

//   // ✅ Get restaurant info safely
//   const restaurantInfo =
//     menu?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card
//       ?.info;

//   // ✅ Dynamically find groupedCard
//   const regularCard = menu?.data?.cards?.find(
//     (card) => card?.groupedCard
//   );

//   const categories =
//     regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//       (category) =>
//         category?.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     ) || [];

//   console.log("categories:", categories);

//   return (
//     <div style={{ width: "100%", height: "auto" }}>
      
//       {/* Restaurant Info */}
//       <div className="res-detail-wrapper">
//         <div className="res-detail-box">
//           <h1 className="res-name">
//             {restaurantInfo?.name}
//           </h1>

//           <h4>
//             ⭐ {restaurantInfo?.avgRating} (
//             {restaurantInfo?.totalRatingsString})
//           </h4>

//           <h4>
//             Cost for two: ₹
//             {restaurantInfo?.costForTwo / 100}
//           </h4>

//           <h4>{restaurantInfo?.areaName}</h4>
//         </div>
//       </div>

//       {/* Accordion Categories */}
//       {categories.map((category, index) => (
//         <RestCategory
//           key={category?.card?.card?.categoryId}
//           category={category?.card?.card}
//           setIndex={() =>
//             setShowIndex(index === showIndex ? null : index)
//           }
//           showItems={index === showIndex}
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantPage;
import { useContext, useEffect, useState } from "react";
import { RESTAURANT_API } from "../Utils/constant";
import Sorted from "./Sorted";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import HotelListContext from "../Utils/HotelListContext";

const RestaurantCont = () => {
  // let [RestaurantData, setRestaurantData] = useState([]);
  // let [rating, setRating] = useState(0);
  const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } =
    useContext(HotelListContext);

  async function fetchData(url) {
    const data = await fetch(url);
    let jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "===================",
    );
    setHotelList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredHotelList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  useEffect(() => {
    fetchData(RESTAURANT_API);
  }, []);

  //* filter functionality --------------------------------------------

  // const handleRating = (e) => {
  //   setRating(e.target.value);
  // };

  // let ratingFilterData = RestaurantData.filter((elem) => {
  //   // console.log(elem, "****************************");
  //   return elem?.info?.avgRating >= rating;
  // });

  if (hotelList.length == 0) {
    return <Shimmer />;
  }

  return (
    <div id="rest-cont">
      {/* <Sorted handleRating={handleRating} rating={rating} /> */}
      <Sorted/>
      <div id="hotel-list">
        {filteredHotelList.map((elem) => (
          // console.log(elem.info,"oooooooooo")
          // <RestaurantCard key={elem.info.id} cardData={elem.info} />
          <Link id="links" to={`/restaurant/${elem?.info?.id}`}>
            <RestaurantCard key={elem?.info?.id} cardData={elem?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCont;

// let RestaurantCont = () => {
//   const [selectedCity, setSelectedCity] = useState("Malakpet");
//   const [selectedRating, setSelectedRating] = useState(0);
//   // const [filterByRating, setFilterByRating] = useState(malakpethotelList);

//   const handleChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   const handleSorting = (e) => {
//     let value = Number(e.target.value);
//     setSelectedRating(value);
//   };

//   let hotelList = selectedCity == "Malakpet" ? malakpethotelList : highTechCityHotelList

//   let filteredRestaurant = hotelList.filter((item) => {
//     return item.avgRating >= selectedRating;
//   });

//   // setFilterByRating(filteredRestaurant);

//   return (
//     <div id="rest-cont">
//       {/* <RestaurantCard resName="mehfil" location="malakpet" costForTwo="300 for two" cuisine="Dessert and pasta" deliveryTime="35-45 min" avgRating="4.5" /> */}
//       <Sorted
//         handleSorting={handleSorting}
//         selectedrating={selectedRating}
//         selectedCity={selectedCity}
//         setSelectedCity={setSelectedCity}
//         handleChange={handleChange}
//       />
//       <div id="hotel-list">

//         {
//           filteredRestaurant.map((item)=>(
//             <RestaurantCard key={item.id} resDetail={item}/>
//           ))
//         }

//       </div>
//     </div>
//   );
// };

// export default RestaurantCont;

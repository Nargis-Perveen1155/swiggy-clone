import { useState } from "react";
import { malakpethotelList, highTechCityHotelList } from "../Utils/mockData";
import Sorted from "./Sorted";
import RestaurantCard from "./RestaurantCard";

let Restaut = () => {
  const [selectedCity, setSelectedCity] = useState("Malakpet");
  const [selectedRating, setSelectedRating] = useState(0);
  // const [filterByRating, setFilterByRating] = useState(malakpethotelList);
  

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSorting = (e) => {
    let value = Number(e.target.value);
    setSelectedRating(value);
  };

  let hotelList = selectedCity == "Malakpet" ? malakpethotelList : highTechCityHotelList

  let filteredRestaurant = hotelList.filter((item) => {
    return item.avgRating == selectedRating;
  });

  // setFilterByRating(filteredRestaurant);

  return (
    <div id="rest-cont">
      {/* <RestaurantCard resName="mehfil" location="malakpet" costForTwo="300 for two" cuisine="Dessert and pasta" deliveryTime="35-45 min" avgRating="4.5" /> */}
      <Sorted
        handleSorting={handleSorting}
        selectedrating={selectedRating}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        handleChange={handleChange}
      />
      <div id="hotel-list">
      
        {
          filteredRestaurant.map((item)=>(
            <RestaurantCard key={item.id} resDetail={item}/>
          ))
        }
         
      </div>
    </div>
  );
};

export default Restaut;


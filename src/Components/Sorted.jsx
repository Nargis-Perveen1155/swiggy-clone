// import { useState } from "react";

import { useContext, useState } from "react";
import HotelListContext from "../Utils/HotelListContext";



const Sorted = () => {
  const [rating, setRating] = useState(0)
  //  const [filterToggle, setFilterToggle] = useState(false);
  let {hotelList,  setFilteredHotelList} = useContext(HotelListContext)

 const handleRating = (e) => {
  const value = Number(e.target.value); // convert string → number
  setRating(value);

  if (value === 0) {
    setFilteredHotelList(hotelList);
  } else {
    const ratingFilterData = hotelList.filter(
      (hotel) => hotel?.info?.avgRating >= value
    );

    setFilteredHotelList(ratingFilterData);
  }
};
   

  return (
    <div id="sorted-cont">
      <div id="headline">
        <h1>Restaurants with online food delivery in Hyderabad</h1>
      </div>
      <select
        name="address"
        id="add-option"
        // onChange={handleChange}
        // value={selectedCity}
      >
        <option value="Malakpet">Malakpet</option>
        <option value="High-tech city">High-tech city</option>
        <option value="Nampally">Nampally</option>
        <option value="Gachhibowli">Gachhibowli</option>
      </select>
      <select name="Rating" id="rating-opt" value={rating} onChange={handleRating}> 
        <option value={0}>All</option>
        <option value={4.7}>4.7</option>
        <option value={4.5}>4.5</option>
        <option value={4}>4</option>
        <option value={3.5}>3.5</option>
        <option value={3}>3</option>
        <option value={2.5}>2.5</option>
        <option value={2}>2</option>
      </select>
      <button id="dark-mode-btn">🌙</button>
    </div>
  );
};

export default Sorted;
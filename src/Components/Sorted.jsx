// import { useState } from "react";



const Sorted = ({rating, handleRating }) => {
   

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
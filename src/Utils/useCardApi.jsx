import React, { useContext, useEffect } from 'react'
import HotelListContext from './HotelListContext';
import {FALAKNUMA_RESTAURANT_API, HIGHTECH_CITY_RESTAURANT_API, RESTAURANT_API } from './constant';

const useCardApi = () => {


	  const {hotelList, setHotelList, filteredHotelList, setFilteredHotelList, selectedCity, setSelectedCity } =
    useContext(HotelListContext);
		let API_URL = selectedCity === "MALAKPET" ? RESTAURANT_API  :  selectedCity === "HIGHTECH_CITY" ? HIGHTECH_CITY_RESTAURANT_API  : FALAKNUMA_RESTAURANT_API

	// const [hotelList, setHotelList] = useState(null)
	// const[filteredHotelList, setFilteredHotelList] = useState(null)
	
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
		fetchData(API_URL);
	  }, [API_URL]);
	
	
  return {hotelList, filteredHotelList,selectedCity, setSelectedCity}
}

export default useCardApi

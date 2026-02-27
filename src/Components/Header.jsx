import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../Utils/UseOnlineStatus";
import HotelListContext from "../Utils/HotelListContext";

const Header = () => {
  let [search, setSearch] = useState("");
  let isOnline = UseOnlineStatus();

  const { hotelList,  setFilteredHotelList } =
    useContext(HotelListContext);

  //* searching functionality--------------------------------

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value, "-----");
    let filteredHotel = hotelList.filter(
      (hotel) => 
        // console.log(hotel, "hotel data********************"),
       hotel.info.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredHotelList(filteredHotel);
  };

  return (
    <div id="header-wrapper">
      <div id="main-container">
        <div id="img-cont">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/041/535/330/small/food-creative-icon-design-vector.jpg"
            alt=""
          />
        </div>
        <div id="search-cont">
          <input
            type="text"
            placeholder="Search for restaurant and more"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div id="nav-item-cont">
          <ul>
            {isOnline ? (
              <li style={{ padding: "1px", color: "green" }}>🟢online</li>
            ) : (
              <li style={{ color: "red" }}>🔴 Offline</li>
            )}
            <Link className="linkss" to="/">
              <li>Home</li>
            </Link>
            <Link className="linkss" to="/about">
              <li>About Us</li>
            </Link>
            <Link className="linkss" to="/contact">
              <li>Contact</li>
            </Link>
            <Link className="linkss" to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

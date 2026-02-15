import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [search, setSearch] = useState("");

  //* searching functionality--------------------------------

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value, "-----");
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

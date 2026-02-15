import { IMAGE_URL } from "../Utils/constant";

const RestaurantCard = ({ cardData }) => {

  const handleCart = ()=>{
    console.log("click btn")
    


  }

  return (
    <div id="rest-card-cont">
      <div id="card-img">
        <img
          // height="200px"
          // src="https://ik.imagekit.io/z5jdpqno5/food.jpeg"
          src={`${IMAGE_URL}${cardData.cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div id="card-content">
      <div id="card-content-text">
          <h3>{cardData.name}</h3>
        <h4>
          <span className="green-star">★</span> {cardData.avgRating}{" "}
          <span className="dot">●</span> {cardData.sla.deliveryTime} mins
        </h4>
        <p className="light-color">{cardData.cuisines.join(",")}</p>
        <p className="light-color">{cardData.locality}</p>
      </div>
      <div id="add-cart-btn">
        <button onClick={handleCart}>Add to cart</button>
      </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

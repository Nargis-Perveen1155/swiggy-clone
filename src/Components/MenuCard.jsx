
import AddOns from "./AddOns";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ menuItem }) => {
  
  const navigate = useNavigate();

 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "25px 25px",
        // gap:"10px",
        // marginTop: "px",
        // marginBottom:"10px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
          //   border: "2px solid black",
          padding: "20px 20px",
          borderRadius: "15px",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "180px",
            marginRight: "25px",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <div>
            <img
              style={{ width: "180px", height: "180px", borderRadius: "20px" }}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuItem?.imageId}`}
              alt={menuItem?.name}
            />
          </div>
          <button
            onClick={handleShowAddOns}
            style={{
              fontSize: "16px",
              position: "absolute",
              bottom: "-20px",
              right: "42px",
              padding: "7px 35px",
              color: "#fc8019",
              border: "2px solid #fc8019",
              //   backgroundColor: "#fc8019",
              //   border: "none",
              borderRadius: "20px",
            }}
          >
            ADD
          </button>
        </div>
        <div style={{width:"calc(100% - 200px)",display:"flex", flexDirection:"column", gap:"10px" }}>
          <h2 style={{fontSize:"18px",}}>Name: {menuItem?.name}</h2>
          <h4>
            Price: ₹
            {menuItem.price
              ? menuItem.price / 100
              : menuItem.defaultPrice / 100}
          </h4>
          <h4>
            Rating : {menuItem?.ratings?.aggregatedRating?.rating}.(
            {menuItem?.ratings?.aggregatedRating?.ratingCount})
          </h4>
          <p style={{ fontSize: "15px", color: "gray", marginTop: "10px" }}>
            {menuItem?.description}
          </p>
        </div>
      </div>
      <AddOns />
    </div>
  );
};

export default MenuCard;

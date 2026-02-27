import { useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const AddOns = () => {
  const [showAddons, setShowAddons] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  // travelling
  const addons =
    menu?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards
      ?.filter((item) => item?.card?.info?.addons?.length > 0)[0]
      ?.card?.info?.addons || [];



  console.log("Extracted Addons:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", addons);

  const handleAddonChange = (choice) => {
    setSelectedAddons((prev) => prev.includes(choice.id)
        ? prev.filter((id) => id !== choice.id)
        : [...prev, choice.id]
    );
  };

  if (!menu) return <h2 style={{paddingLeft : "12px", fontSize:"16px"}}>Loading addons...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h3> Addons</h3>

      {/* 🔥 Button to Open Customization */}
      {addons.length > 0 && (
        <button
          onClick={() => setShowAddons(true)}
          style={{
            padding: "10px 20px",
            backgroundColor:"orange",
			marginTop:"5px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Customize Item
        </button>
      )}

      {/* ADDON UI */}
      {showAddons && addons.length > 0 && (
        <div
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            background: "#f9f9f9",
          }}
        >
          <h3>Customize Your Order</h3>

          {addons.map((addonGroup) => (
            <div key={addonGroup.groupId} style={{ marginBottom: "15px" }}>
              <h4>{addonGroup.groupName}</h4>

              {addonGroup.choices.map((choice) => (
                <div key={choice.id}>
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(choice.id)}
                    onChange={() => handleAddonChange(choice)}
                  />
                  {choice.name} (+ ₹{choice.price / 100})
                </div>
              ))}
            </div>
          ))}

          <button
            onClick={() => {
              console.log("Selected Addons:", selectedAddons);
              setShowAddons(false);
            }}
            style={{
              padding: "8px 15px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Confirm
          </button>
        </div>
      )}

      {addons.length === 0 && (
        <h3 style={{ marginTop: "1 0px", fontSize:"16px", color:"gray" }}>
          Customization is not available for this restaurant
        </h3>
      )}
    </div>
  );
};

export default AddOns;
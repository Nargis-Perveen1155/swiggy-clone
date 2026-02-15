//* first way -- destructuring through props
// const RestaurantCard = ({resName,cuisine, avgRating, deliveryTime, costForTwo, location}) => {
//   return (
//     <div id="rest-card-cont">
//       <div id="card-img">
//         <img
//           height="200px"
//           src="https://ik.imagekit.io/z5jdpqno5/food.jpeg"
//           alt=""
//         />
//       </div>
//       <div id="card-content">
//         <h3>{resName}</h3>
//         <h4>{costForTwo}</h4>
//         <h4>{avgRating} | { deliveryTime}</h4>
//         <h4>{cuisine}</h4>
//         <h4>{location}</h4>
//       </div>
//     </div>
//   );
// };

import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

// import { Outlet } from "react-router-dom";

//* second way (example how it work behind the scene)
//let props={
// resDetail{
//     id: "101",
//     resName: "Theobroma",
//     cuisine: ["Bakery", "Desserts", "Beverages"],
//     avgRating: "4.7",
//     deliveryTime: "30-35 mins",
//     costForTwo: "₹300 for two",
//     imgId: "theobroma.jpg",
//     location: "Shivam Road",
// }
// }
// const RestaurantCard = ({resDetail}) => {
//   return (
//     <div id="rest-card-cont">
//       <div id="card-img">
//         <img
//           height="200px"
//           src="https://ik.imagekit.io/z5jdpqno5/food.jpeg"
//           alt=""
//         />
//       </div>
//       <div id="card-content">
//         <h3>{resDetail.resName}</h3>
//         <h4>{resDetail.costForTwo}</h4>
//         <h4>{resDetail.avgRating} | {resDetail.deliveryTime}</h4>
//         <h4>{resDetail.cuisine}</h4>
//         <h4>{resDetail.location}</h4>
//       </div>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default App;

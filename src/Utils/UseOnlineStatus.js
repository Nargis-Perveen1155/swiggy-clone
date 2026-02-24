import React, { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [isOnline, setisOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("You are offline");
      setisOnline(false);
    });
	window.addEventListener("online", ()=>{
		console.log("you are online")
		setisOnline(true)
	})
  });
  return isOnline
};

export default UseOnlineStatus;

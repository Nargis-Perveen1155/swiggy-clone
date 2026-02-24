import React from 'react'
import useRestaurantMenu from '../Utils/useRestaurantMenu'

const MenuFolder = () => {
	 let {menuData, restData} = useRestaurantMenu(resId)
	
  return (
	<div>
	  <span></span>
	  <span></span>
	</div>
  )
}

export default MenuFolder

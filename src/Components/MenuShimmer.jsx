import React from 'react'

const MenuShimmer = () => {
  return (
	<div style={{height:"100%", width:"100vw", marginTop:"5vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
		 <div style={{}} className="res-detail-wrapper">
        <div className="res-detail-box">
          <h1 className="res-name"></h1>

          <div className="res-detail-box1">
            <h4>
              <span style={{height:"15px", width:"70%", backgroundColor:"gray"}}></span>
              
              <span className="dot"></span> 
            </h4>

            <h4 style={{ marginTop: "10px" }}>
            
            </h4>

            <h5 className="cuisine">
             
            </h5>

            <h4 className="outlet"></h4>
            <h4 className="delivery"></h4>

            
          </div>
        </div>
      </div>

	  <div style={{height:"70px", width:"90%", backgroundColor:"#f0f0f0", marginTop:"25px", borderRadius:"10px"}}></div>
	  <div style={{height:"70px", width:"90%", backgroundColor:"#f0f0f0", marginTop:"25px"}}></div>
	  <div style={{height:"70px", width:"90%", backgroundColor:"#f0f0f0", marginTop:"25px"}}></div>
	  <div style={{height:"70px", width:"90%", backgroundColor:"#f0f0f0", marginTop:"25px"}}></div>
	  <div style={{height:"70px", width:"90%", backgroundColor:"#f0f0f0", marginTop:"25px"}}></div>
	  </div>

  )
}

export default MenuShimmer

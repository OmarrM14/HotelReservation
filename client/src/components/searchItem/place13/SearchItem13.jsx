import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem10 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/53/ce/4b/img-20190706-143432-largejpg.jpg?w=1000&h=-1&s=1"
        alt=""
        className="siImg"
        />
            <div className="siDesc">
        <h1 className="siTitle">
            Tropitel Dahab Oasis
        </h1>
        <span className="siDistance">   
            Blue Hole Road, Dahab 00087 Egypt
        </span>
        <span className="siTaxiOp">
            Free airport taxi
        </span>
        <span className="siSubtitle">
            Perfectly located in a magnificent spot where the sea hugs the feet of the golden Sinai Mountains, Tropitel Dahab Oasis offers divers and non divers the delights of the Red Sea's most renowned diving spot, the Blue Hole, stretching along the coast of Aqaba Gulf, only 70 minutes drive from Sharm El-Sheikh International Airport.Tropitel Dahab Oasis offers a breathtaking coastline of sun-drenched beach with coral reefs and crystal clear water, combined with simply decorated restaurants and cool bars, as well as numerous leisure facilities that will make you feel home away from home.
        </span>
        <span className="siFeatures">
            Air conditioning
            Private beach
            Housekeeping
            Private balcony
            Room service
            Minibar
            Refrigerator
            Flatscreen TV
        </span>
        <span className="siCancelOp">
            Free cancellation 
        </span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>9.0</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">
              2300 EGP
            </span>
            <span className="siTaxOp">
                Includes taxes and fees
            </span>
            <button className="siCheckButton" onClick={handleSubmit}>
                Book Now
            </button>
        </div>
    </div>
</div>
  )
}

export default SearchItem10
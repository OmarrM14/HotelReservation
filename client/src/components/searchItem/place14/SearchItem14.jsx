import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem14 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8d/47/e2/steigenberger-alcazar.jpg?w=1800&h=-1&s=1"
        alt=""
        className="siImg"
        />
            <div className="siDesc">
        <h1 className="siTitle">
            Happy Life Village
        </h1>
        <span className="siDistance">   
            Wady Quonay, Dahab 46617 Egypt
        </span>
        <span className="siTaxiOp">
            Free airport taxi
        </span>
        <span className="siSubtitle">
            Finding an ideal family-friendly hotel in Dahab does not have to be difficult. Welcome to Happy Life Village, a nice option for travelers like you.

            Free internet access is offered to guests, and rooms at Happy Life Village offer air conditioning.

            During your stay, take advantage of some of the amenities offered, including a 24 hour front desk, a concierge, and shops. Guests of Happy Life Village are also welcome to enjoy a pool and free breakfast, located on site. For travelers arriving by car, free parking is available.

            Looking to explore? Then look no further than WICKEDiCANDY, which is a popular Dahab art gallery – and it is conveniently located a short distance from the hotel.

            Happy Life Village looks forward to welcoming you on your visit to Dahab.
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
               3300 EGP
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

export default SearchItem14
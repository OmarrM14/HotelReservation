import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem12 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/27/d1/7d/hotel-over-view.jpg?w=1000&h=-1&s=1"
        alt=""
        className="siImg"
        />
            <div className="siDesc">
        <h1 className="siTitle">
            Ecotel Dahab Bay View Resort
        </h1>
        <span className="siDistance">   
            unai Valley, Dahab 45214 Egypt
        </span>
        <span className="siTaxiOp">
            Free airport taxi
        </span>
        <span className="siSubtitle">
            Hotel located next to 18,000 m2 of private sandy beach overlooking the Gulf of Aqaba Three swimming pools (two for adults and one for children), one of them heated in winter The resort captivates the senses with unrivalled facilities and a relaxing atmosphere. Great diving spot and world-famous windsurfing destination 217 fully furnished rooms, family rooms and suites overlooking the sea Great choice of restaurants and bars to delight your taste buds and indulge your senses.
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
               2700 EGP
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

export default SearchItem12
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
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8d/47/e2/steigenberger-alcazar.jpg?w=1800&h=-1&s=1"
        alt=""
        className="siImg"
        />
            <div className="siDesc">
        <h1 className="siTitle">
        Steigenberger Alcazar
        </h1>
        <span className="siDistance">   
        Nabq Bay, Sharm El Sheikh Egypt
        </span>
        <span className="siTaxiOp">
            Free airport taxi
        </span>
        <span className="siSubtitle">
        •334 beautifully-appointed Superior Rooms (46 sqm), including 57 swim up ones. •226 Deluxe Family Rooms (58 sqm) including 36 swim ups, accommodating up to two adults & two children. •22 Suites with private pool perfect for couples and honeymooners •Two Villas (216 sqm) overlooking the sea
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
               4800 EGP
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
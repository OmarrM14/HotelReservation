import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem9 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
    <img
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/1b/9f/23/pool-outdoor.jpg?w=1100&h=-1&s=1"
    alt=""
    className="siImg"
    />
    <div className="siDesc">
        <h1 className="siTitle">
        Rixos Sharm El Sheikh
        </h1>
        <span className="siDistance">   
        Nabq Bay, Sharm El Sheikh 46628 Egypt
        </span>
        <span className="siTaxiOp">
            Free airport taxi
        </span>
        <span className="siSubtitle">
        198 Superior Rooms, 290 Deluxe Rooms, 70 Family Rooms and 137 Junior Suites are spread around this beautifully designed modern resort. Several swimming pools wind there way between buildings or there is a gorgeous stretch of beach providing our guests with lots of options on where to spend their days. Try snorkeling from the wooden jetty or merely a stroll at sunset to see the magnificence of the underworld of the Red Sea. Dining choices include international buffet or choose from the World of Cuisines, with Turkish, Chinese, Indian, Sushi, Italian, Sea Food or a taste of Brazilian cuisine.
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

export default SearchItem9
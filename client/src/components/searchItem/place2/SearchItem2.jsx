import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem2 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/e9/24/c0/steigenberger-aqua-magic.jpg?w=1400&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            Steigenberger Aqua Magic
            </h1>
            <span className="siDistance">
            Yussif Afifi Road, Hurghada Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
                Air conditioning
                Private beach
                Housekeeping
                Private balcony
                Room service
                Minibar
                Refrigerator
                Flatscreen TV
            </span>
            <span className="siFeatures">
            Steigenberger Aqua Magic is the Red Sea's best luxury family resort addition with comfortable rooms ideal for families guaranteeing privacy for both, parents and children, a generous pool landscape and its own certified aqua park suitable for children and adults. A private beach with sand is just a 6-minute walk away. The hotel offers 394 hotel rooms, 294 family rooms and 15 suites with views of the promenade, pool or sea.
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
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">
                    2320 EPG
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

export default SearchItem2
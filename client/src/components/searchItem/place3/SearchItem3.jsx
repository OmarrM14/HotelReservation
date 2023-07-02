import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem3 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/24/60/reception-hall.jpg?w=1400&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            Titanic Resort & Aqua Park
            </h1>
            <span className="siDistance">
            El Geesh - Hurghada Rd, Hurghada 84511 Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
            Titanic Resort & Aqua Park is an amazing resort of endless choices on the Village Road Red Sea coast. Being an Aqua Park, it is popular for its water slides, located on an area of 61.000 m2 varied swimming pools, besides a multiple range of sports and social activities for people of all ages Located only at 16 minutes from center of Hurghada and 10 minutes from the airport. Titanic Resort & Aqua Park offers all the comforts of a charming Red Sea resort with a unique combination of casual elegance and affordability. Titanic Resort & Aqua Park combines active and family vacation with an exquisite theme of water sports and leisure.
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
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">
                    1480 Egp
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

export default SearchItem3
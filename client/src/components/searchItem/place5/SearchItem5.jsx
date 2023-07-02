import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem5 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/71/29/4b/overview.jpg?w=2000&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            Jaz Aquamarine Resort
            </h1>
            <span className="siDistance">
            South Sahl Hashish Road Magawish District, Hurghada Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
            Jaz Aquaviva Resort has 487 guest rooms divided as follows: 436 Family Rooms, 50 Standard Rooms & 1 Suite with pool. Located in the heart of Madinat Makadi, the 5 star Jaz Aquaviva offers Makadi Water World featuring 50 adrenalin-pumping water slides and an 18-hole Championship Golf Course an extra charge. All rooms are equipped with an individually controlled air condition & feature a spacious balcony or terrace. Room features include: In-room safe box, Satellite TV & LCD screen, Minibar, hairdryer, shaver plug & cosmetic mirror, smoke detectors, tea & coffee making facilities
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
                <button>7.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">
                    2900 EGP
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

export default SearchItem5
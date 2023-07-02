import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem8 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/20/b4/7a/savoy-sharm-el-sheikh.jpg?w=1400&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            Savoy Sharm El Sheikh
            </h1>
            <span className="siDistance">
            Soho Square, Sharm El Sheikh Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
                Savoy Sharm El Sheikh is located near Ras Mohammed National Park inside SOHO SQUARE, the 5-star hotel offers 136 sea view rooms, 55 pool view rooms, 161 garden view rooms, 46 triple rooms, 2 special care rooms, 13 diplomatic suites, and 1 presidential suite. The hotel also features a private beach, 5 swimming pools 3 adult pools (2 heated in winter time) and 2 children's pools (1 heated in winter time) , 5 Bars (1 pool Bar) , and 6 restaurants Savoy hotel offers different types of meal plans that ensures you trying everything starting from the hotel’s main restaurant to Soho Square different restaurants and cuisines; standard Bed and breakfast, half board, full board, S-Class (ultra all-inclusive concept) , and half and full board dine around option (which SOHO Square restaurants as well) Diving or at least snorkeling with a PADI approved dive school on the beach. In the hotel we can find tennis, squash and beach volleyball courts as well as a modern gym facility . Sauna and Jacuzzis, as well as a range of beauty and spa treatments. Each room features adjustable air conditioning, WiFi access, mini-bar, en suite bathroom and hairdryer, and a private terrace overlooking our gardens , pools, or the beach.
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

export default SearchItem8
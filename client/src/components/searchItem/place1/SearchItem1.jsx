import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem1 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/df/05/b6/premier-le-reve-hotel.jpg?w=1400&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            Premier Le Reve Hotel & Spa
            </h1>
            <span className="siDistance">
            Piece 33, Sahl Hasheesh, Hurghada 84521 Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
            Opening our doors for the first time in 2009, we have strived to become Luxury Adult Only Resort who is providing upscale hospitality from the heart. Through authenticity and care, we created unique memorable experiences for our guests that will be treasured for a lifetime. Over the past decade we have became destination of choice to our guests and will continue to do so for years to come. Our secret lays in our incredible team who put the soul in hospitality every day. The needs of our guests are in the forefront of everything we do. Located in Sahl Hasheesh on Egypt's Red Sea coast, an area made internationally famous by the combination of its clear skies, azure sea, and stark beauty of its desert mountains, Premier Le Rêve Hotel & Spa adds even more beauty to this work of art through its wonderfully landscaped grounds and elegant structures. Spend your vacation in luxury while enjoying the wonderful all year round weather and basking in the golden rays of the sun. This top-drawer hotel is a heaven for holidaying couples. It has its own private beach, a deluxe spa and a cluster of pools with sea views. Plus it’s adults-only, which means plenty of peace and quiet.
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
                    3800 EGP
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

export default SearchItem1
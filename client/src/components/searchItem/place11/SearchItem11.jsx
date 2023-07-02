import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem11 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/16/c4/b6/jaz-dahabeya.jpg?w=1400&h=-1&s=1"
        alt=""
        className="siImg"
        />
            <div className="siDesc">
        <h1 className="siTitle">
        Jaz Dahabeya
        </h1>
        <span className="siDistance">   
        Lagoon Area, Dahab 93333 Egypt
        </span>
        <span className="siTaxiOp">
            Free airport taxi
        </span>
        <span className="siSubtitle">
        Jaz Dahabeya is situated directly on the sandy beach of the natural lagoon by the Red Sea resort of Dahab, just a one hour drive from Sharm El Sheikh International Airport and only two hours from Taba International Airport. You can reach Cairo in around six hours, driving through the beautiful mountains of Sinai. Away from it all and not as bustling or as yet commercial as some other Red Sea resorts, Jaz Dahabeya offers serenity in an unspoilt landscape with some of the best adrenalin fuelled watersports action and diving in the world. The scenery surrounding the hotel is breathtaking, looking over the lagoon to the mountains of Sinai and Saudi Arabia as a backdrop. The bay is one of the most sought after destinations for windsurfers keen for the ultimate challenge and many other attractions, such as the Mountain of Moses, St. Catherine Monastery and the Coloured Canyon are close to hand. Service and warm hospitality complete the picture as Jaz Dahabeya has won several awards including Holiday Check 2005, TUI Holly Award 2006 and L’Tur best 100 hotels word-wide in 2007.
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

export default SearchItem11
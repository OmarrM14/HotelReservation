import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem6 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/84/8f/fd/general-view-of-rixos.jpg?w=1000&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            Rixos Premium Magawish Suites & Villas
            </h1>
            <span className="siDistance">
            Safaga Road, Km 12, Hurghada 84517 Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
            Rixos Premium Magawish Suites & Villas is the perfect destination for everyone traveling to Hurghada, Red Sea. Our premium ultra all-inclusive hotel offers you only luxurious suites and villas with beachfront accommodation, all with scenic views, flat TV, safe box, mini-bar (refilled daily), Espresso machine, pillow menu, bath amenities and much more. Elevate your experiences with direct access to the pools from all villas and some suites, also upon your request we have private beach and pool cabanas. Enjoy 1 km private sandy beach, 30 Swimming pools (heated in winter), ten bars, six a-la-carte restaurants (Turkish, Asian, Sea Food, BBQ, Brazilian and International), Rixy Kids Club, sports club and stunning spa. Entertain yourself and family with beach and pool activities, tennis courts, mini football, kids’ pools, modern fitness center, diving center, horse riding and more. Stay fit & healthy at “Exclusive Sports Club” with professional trainers for yoga, Zumba, aqua aerobics, dance lessons, pilates and cross-fit. “Rixy Kids Club” for your kids features master classes, craft room, mini disco, children’s cinema, playground and themed days. Indulge yourself at the stunning “Anjana Spa” with a variety of full body massage and care rituals performed by professional therapists, featuring Turkish hammam, private massage rooms, steam rooms, Jacuzzi and sauna, peeling and compresses, complex spa services, hairdresser and beauty salon. Only 7 km away from Hurghada international airport.
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
                <button>8.5</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">
                    2800 EGP
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

export default SearchItem6
import React from 'react'
import "./searchItem.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const SearchItem7 = () => {
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    
      //alert("Hotel is Booked");
      navigate("/hotels/:id")
    
  };
  return (
    <div className="searchItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/97/8b/a9/beach-overview.jpg?w=1400&h=-1&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">
            SUNRISE Arabian Beach Resort
            </h1>
            <span className="siDistance">
            86 Pyramisa Road Behind Conference Center, Sharm El Sheikh 46619 Egypt
            </span>
            <span className="siTaxiOp">
                Free airport taxi
            </span>
            <span className="siSubtitle">
                Highlights: • Luxury resort with private beach and coral reef • 6 pools and 2 Jacuzzis • 2 buffet and 7 high à la carte restaurants (unlimited visits when booking all-inclusive) • Royal club privileges upon booking selected suites • Royal Villa availability Discover the spirit of Arabian ambiance in the 5-star luxury SUNRISE Arabian Beach Resort -Grand Select-. Walk through entrances and hallways elegantly designed to provide an authentic Arabian feel. Gaze upon the beauty of the exterior, complementing the natural beauty of the Red Sea. Relax at one of the rooms on this six-terraced architectural beauty and enjoy all the luxuries we have to offer, including pools and a rooftop garden. We offer a private beach with access to a jetty giving you direct access to the beautiful clear waters in which you can discover the wonders of the Red Sea from our coral reef. This elegant resort features a fully equipped gym (16+), and a luxury spa & beauty salon (chargeable). Free Wi-Fi is available throughout the resort and in all rooms. Relax at one of the 421 rooms & suites at the stunning resort. Every room comes with satellite TV, air conditioning, minibar with soft drinks, tea & coffee making facilities and much more. For guest seeking an extra outstanding experience, SUNRISE Arabian Beach resort offers sea view suites, that can come with a small garden or pool area and royal club privileges. Enjoy all the luxuries the resort has to offer, including 7 pools and a rooftop garden. Experience culinary delights in the international restaurant with a daily changing theme buffet or dine at one of the 7 à-la-carte restaurants serving Indian, Greek, Thai, Mongolian, Italian, French Cuisine, and delicacies from the sea at Felucca Seafood restaurant (chargeable). In addition, the resort houses 8 Bars: Pool Bar, Beach Bar, Waterfall Grill Bar, Shisha Café, a Pub, 2 Lounges and a 24h Lobby Bar. SUNRISE Kid’s Club led by professional care takers is available for kids between 3-12 years old offering Daily Educational, Entertaining Sports & Activities. Located 12km (16 min) to Sharm El Sheikh Centre and 8km (9 min) to Sharm El Sheikh International Airport, the resort features a distinctive location. Our all-inclusive concept includes: Breakfast, Lunch and Dinner in Buffets or a la carte Restaurants (unlimited reservations), Snacks from 12:00-17:00, 22:30-01:00, local alcoholic Beverages from 10:00-00:00, Water and Hot Beverages 24/7, Minibar with water and soft drinks, Wi-Fi, free entertainment and sports activities, and much more. Some activities/services such as Diving Center, Spa Treatment are extra charge. Please get back to the hotel AI Formula for detailed information.
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

export default SearchItem7
import React, { useState } from 'react'
import "./list.css";

import { useLocation } from 'react-router-dom';

import Navbar from "../../components/navbar/Navbar";
import Header from '../../components/header/Header';

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem11 from '../../components/searchItem/place11/SearchItem11';
import SearchItem12 from '../../components/searchItem/place12/SearchItem12';
import SearchItem13 from '../../components/searchItem/place13/SearchItem13';
import SearchItem14 from '../../components/searchItem/place14/SearchItem14';


import Header2 from '../../components/header/header2/Header2';


const List3 = () => {

  // ======================LOGIC============================

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options); 

  console.log('====================================');
  console.log(location);
  console.log('====================================');

  return (
    <div>
      <Header2 type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItems">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItems">
              <label>Check-in Date</label>
              <span 
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className='z-50'
                />
              )}
            </div>
            <div className="lsOptionItem">
              <span className="listOptText">
                Min price <small>per night</small>
              </span>
              <input type="number" className="listOptInput" />
            </div>
            <div className="lsOptionItem">
              <span className="listOptText">
                Max price <small>per night</small>
              </span>
              <input type="number" className="listOptInput" />
            </div>
            <div className="lsOptionItem">
              <span className="listOptText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="listOptInput"
                  placeholder={options.adult}
                />
            </div>
            <div className="lsOptionItem">
              <span className="listOptText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="listOptInput"
                  placeholder={options.children}
                />
            </div>
            <div className="lsOptionItem">
              <span className="listOptText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="listOptInput"
                  placeholder={options.room}
                />
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem11/>
            <SearchItem12/>
            <SearchItem13/>
            <SearchItem14/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List3
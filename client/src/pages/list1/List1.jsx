import React, { useState } from 'react'
import "./list.css";

import { useLocation } from 'react-router-dom';

import Navbar from "../../components/navbar/Navbar";
import Header from '../../components/header/Header';

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/searchItem/SearchItem';
import SearchItem1 from '../../components/searchItem/place1/SearchItem1';
import SearchItem2 from '../../components/searchItem/place2/SearchItem2';
import SearchItem3 from '../../components/searchItem/place3/SearchItem3';
import SearchItem4 from '../../components/searchItem/place4/SearchItem4';
import SearchItem5 from '../../components/searchItem/place5/SearchItem5';
import SearchItem6 from '../../components/searchItem/place6/SearchItem6';
import Header2 from '../../components/header/header2/Header2';


const List1 = () => {

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
            <SearchItem1/>
            <SearchItem2/>
            <SearchItem3/>
            <SearchItem4/>
            <SearchItem5/>
            <SearchItem6/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List1
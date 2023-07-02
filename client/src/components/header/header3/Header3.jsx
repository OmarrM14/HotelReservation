import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  faBed, faPlane, 
  faCar, faTaxi, 
  faCalendarDays, faPerson, 
  faSearch } 
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import "./header.css";

const Header2 = ({ type }) => {
  
  // ==================SET-LOGIC =================

  const [destination, setDestination] = useState("");

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const navigate = useNavigate();

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    if(destination === 'hurgada' || destination === 'Hurgada' ){
      navigate("/hurgada",{state: {destination, date, options}})
    }
    else if(destination === 'sharm elshakh' || destination === 'Eharm Elshakh' ){
      navigate("/Sh",{state: {destination, date, options}})
    }
    else if(destination === 'dahab' || destination === 'Dahab' ){
      navigate("/dahab",{state: {destination, date, options}})
    }
    else{
      navigate("/hotels", {state: {destination, date, options}})
    }
  }

  const Confirm = () => {
   
    navigate("/2", {state: {destination, date, options}})
    
  }


  // ===================RETURN COMPONENTS==================
  return (
    <div className='header'>
      <div 
        className={type === "list" ? "headerContainer listMode" : "headerContainer"}
      >
        <div className="headerList">
          {/* =====================HEADER ITEMS=============== */}
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          {/*
          <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>*/}
        </div>
        {/* =====================TITLE-HEADER=========================== */}
        { type !== "list" && 
          <>
            <h1 className="headerTitle">
            Reservation has to be Confirmed
            </h1>
            <p className="headerDesc">
              Please Confirm your reservation otherwise it will be automaticcly cancelled after 48 Hours
            </p>
            <button className="headerBtn" on onClick={Confirm}>
             Confirm
            </button>
           
            {/* ============================SEARCH-BAR======================= */}
            <div className="headerSearch">
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                
                <input 
                  type="text"
                  placeholder='Where are you want to go?'
                  className='headerSearchInput'
                  onChange={e=>setDestination(e.target.value)}
                />
                
              </div>
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                
                <span 
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate &&
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="dateHeaderSearch"
                  />
                }
              </div>
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span 
                  className="headerSearchText" 
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                </span>
                {openOptions &&
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button 
                          disabled={options.adult <= 1}
                          className="optionCounterBtn" 
                          onClick={() => handleOption("adult", "d")}>
                            -
                          </button>
                        <span className="optionCounterNumb">{options.adult}</span>
                        <button 
                          className="optionCounterBtn" 
                          onClick={() => handleOption("adult", "i")}
                        >
                            +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button 
                          disabled={options.children <= 1}
                          className="optionCounterBtn" 
                          onClick={() => handleOption("children", "d")}
                        >
                            -
                        </button>
                        <span className="optionCounterNumb">{options.children}</span>
                        <button 
                          className="optionCounterBtn" 
                          onClick={() => handleOption("children", "i")}
                        >
                            +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button 
                          disabled={options.room <= 1}
                          className="optionCounterBtn" 
                          onClick={() => handleOption("room", "d")}
                        >
                            -
                        </button>
                        <span className="optionCounterNumb">{options.room}</span>
                        <button 
                          className="optionCounterBtn" 
                          onClick={() => handleOption("room", "i")}
                        >
                            +
                        </button>
                      </div>
                    </div>
                  </div>
                }
              </div>
              <div className="headerSearchItems">
                <button 
                  className="headerBtn-search"
                  onClick={handleSearch}
                >
                  <FontAwesomeIcon icon={faSearch} className="headerIcon" />
                  Search
                </button>
              </div>
            </div>
          </>
        }
      </div>    
    </div>
  )
}

export default Header2
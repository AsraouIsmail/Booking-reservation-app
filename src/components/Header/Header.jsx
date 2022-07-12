/* eslint-disable no-unused-vars */
import "./Header.css"

import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {

    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
    ]);
    
    const [openDate, setOpenDate] = useState(false);

    const [openOptions, setOpenOptions] = useState(false);
    
    const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
    });
  
  const [destination, setDestination] = useState("");
  
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

     const handleOption = (name, operation) => {
        setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
        });
    };
  return (
      <div className="header">
          
          <div className={type === "list" ? "headerContainer listMode" : "headerContainer"
       }>
          
          <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Hebergements</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Vols</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Location de voitures</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxis aeroport</span>
                </div>
              </div>


              {type !== "list" && (
                  <>
               <h1 className="headerTitle">
                Trouvez votre prochain séjour
                </h1>
                <p className="headerDesc">
                Recherchez des offres sur des hôtels, des hébergements indépendants et plus encore</p>
              <button className="headerBtn">Se connecter / S'inscrire</button>
              
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Ou allez-vous?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                />
                  </div>
                  
                  <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                      >Arrivee - Depart {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                      { openDate && (<DateRangePicker
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />)}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                      >{`${options.adult} adultes · ${options.children} enfant · ${options.room} chambre`}</span>
                
                 {openOptions && ( <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adultes</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Enfant</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Chambre</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                      )}
                  </div>
                  <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>     
              </div>
            </>
            )}      
              </div>
        </div>      
      </div>
      
  )
}

export default Header
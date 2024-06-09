import React, { useState, useEffect, useRef } from "react";
import "./css/Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";


function Searchbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    <MdOutlineVideoLibrary size={25} className="searchbarIcon" />
  );

  const dropdownRef = useRef(null);
  const searchBoxRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) ||
        searchBoxRef.current &&
        searchBoxRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <div className="dropdown" onClick={toggleDropdown} ref={dropdownRef}>
        <div id="drop-text" className="dropdown-text">
          <span id="span">{selectedOption}</span>
          <RiArrowDropDownLine
            size={25}
            className={`${dropdownOpen ? "rotate" : ""}`}
          />
        </div>
        <ul id="list" className={`dropdown-list ${dropdownOpen ? "show" : ""}`}>
          <li
            className="dropdown-list-item"
            onClick={() =>
              handleOptionClick(
                <MdOutlineVideoLibrary size={25} className="searchbarIcon" />
              )
            }
          >
            <MdOutlineVideoLibrary size={25} className="searchbarIcon" /> &nbsp;
            library
          </li>
          <li
            className="dropdown-list-item"
            onClick={() =>
              handleOptionClick(
                <IoMdGlobe size={25} className="searchbarIcon" />
              )
            }
          >
            <IoMdGlobe size={25} className="searchbarIcon" /> &nbsp; search all
            of vimeo
          </li>
        </ul>
      </div>
      <div className="search-box" ref={searchBoxRef}>
        <input
          type="text"
          id="search-input"
          placeholder="Search videos, folders and more"
        />
        <div className="search-icon searchbarIcon" >
          <IoSearchOutline size={20} className="searchbarIcon" />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;

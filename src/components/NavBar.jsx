import React, { useState, useEffect, useRef } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Searchbar from "./Searchbar";
import NewbtnPop from "./NewbtnPop";

function NavBar() {
  const [btnPop, setBtnPop] = useState(false);
  const newbtnRef = useRef(null);
  const buttonRef = useRef(null);

  const handleNewbtnPop = (event) => {
    setBtnPop((prev) => !prev); // Toggle the dropdown visibility
  };

  const handleClickOutside = (event) => {
    if (
      newbtnRef.current &&
      !newbtnRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setBtnPop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeNewbtnPop = () => {
    setBtnPop(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap gap-4">
          <div className="searchbar-component">
            <Searchbar />
          </div>

          <div className="d-flex align-items-center gap-4 ms-auto">
            <button
              type="button"
              className="navbtn1 btn btn-primary upgrade p-0 px-1 pb-1"
            >
              Upgrade
            </button>

            <IoHelpCircleOutline size={35} className="navIcon" />

            <MdOutlineNotifications size={35} className="navIcon" />

            <div className="d-flex align-items-center flex-nowrap">
              <button
                ref={buttonRef}
                className="btn btn-primary p-1 navbtn2"
                onClick={handleNewbtnPop}
                style={{ whiteSpace: "nowrap", fontWeight: "700" }}
              >
                New <RiArrowDropDownLine size={35} />
              </button>
            </div>

            <CgProfile size={40} className="navIcon" />
          </div>
        </div>
      </nav>
      <div ref={newbtnRef}>
        <NewbtnPop isOpen={btnPop} closeNewbtnPop={closeNewbtnPop} />
      </div>
    </>
  );
}

export default NavBar;

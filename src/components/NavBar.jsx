import React, { useState, useEffect, useRef } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Searchbar from "./Searchbar";
import NewbtnPop from "./NewbtnPop";
import Profilepop from "./Profilepop";

function NavBar() {
  const [btnPop, setBtnPop] = useState(false);
  const [profilePop, setProfilePop] = useState(false);
  const newbtnRef = useRef(null);
  const buttonRef = useRef(null);
  const profileRef = useRef(null);

  const handleProfilePop = () => {
    setProfilePop(!profilePop);
  };

  const handleNewbtnPop = (event) => {
    setBtnPop(!btnPop);
  };

  const handleClickOutsideNewbtnPop = (event) => {
    if (
      newbtnRef.current &&
      !newbtnRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setBtnPop(false);
    }
  };

  const handleClickOutsideprofileRef = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setProfilePop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNewbtnPop);
    document.addEventListener("mousedown", handleClickOutsideprofileRef);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNewbtnPop);
      document.removeEventListener("mousedown", handleClickOutsideprofileRef);
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
              className="navbtn1 btn  upgrade p-0 px-1 pb-1"
            >
              Upgrade
            </button>

            <IoHelpCircleOutline size={35} className="navIcon" />

            <MdOutlineNotifications size={35} className="navIcon" />

            <div className="d-flex align-items-center flex-nowrap">
              <button
                ref={buttonRef}
                className="btn  p-1 navbtn2"
                onClick={handleNewbtnPop}
                style={{ whiteSpace: "nowrap", fontWeight: "700" }}
              >
                New <RiArrowDropDownLine size={35} />
              </button>
            </div>

            <div onClick={handleProfilePop} ref={profileRef}>
              <CgProfile size={40} className="navIcon" />
            </div>
          </div>
        </div>
      </nav>
      <div ref={newbtnRef}>
        <NewbtnPop isOpen={btnPop} closeNewbtnPop={closeNewbtnPop} />
      </div>

      <Profilepop isOpen={profilePop} />
    </>
  );
}

export default NavBar;

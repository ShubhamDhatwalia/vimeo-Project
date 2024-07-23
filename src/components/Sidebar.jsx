import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdOutlineVideoLibrary,
  MdOutlinePhotoSizeSelectSmall,
  MdOutlineEqualizer,
} from "react-icons/md";
import { RiLiveLine, RiMenuFold3Fill } from "react-icons/ri";
import { BiSlideshow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const mainRef = useRef(null);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  const linkTextAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      mainRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "220px" : "50px",
          transition: {
            duration: 0.4,
            damping: 12,
          },
        }}
        className="side-bar"
        ref={sidebarRef}
      >
        <div className="top-section d-flex align-items-center justify-content-between mb-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={linkTextAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="brand my-2 ms-3"
              >
                Vimeo
              </motion.div>
            )}
          </AnimatePresence>

          <div className="icon my-2 mx-3 ">
            <RiMenuFold3Fill onClick={toggle} />
          </div>
        </div>

        <NavLink to="/" activeClassName="active" className="link link1">
          <div className="icon">
            <GoHome />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={linkTextAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link-name"
              >
                Home
              </motion.div>
            )}
          </AnimatePresence>
        </NavLink>

        <NavLink
          to="/library"
          activeClassName="active"
          className="link d-flex justify-content-between"
        >
          <div className="d-flex align-items-center gap-3">
            <div className="icon">
              <MdOutlineVideoLibrary />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={linkTextAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link-name"
                >
                  Library
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="plus"> {isOpen && <FaPlus />} </div>
        </NavLink>

        <NavLink to="/liveEvents" activeClassName="active" className="link">
          <div className="icon">
            <RiLiveLine />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={linkTextAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link-name"
              >
                Live Events
              </motion.div>
            )}
          </AnimatePresence>
        </NavLink>

        <hr />

        <NavLink
          to="/showcases"
          activeClassName="active"
          className="link d-flex justify-content-between"
        >
          <div className="d-flex align-items-center gap-3">
            <div className="icon">
              <MdOutlinePhotoSizeSelectSmall />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={linkTextAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link-name"
                >
                  Showcases
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="plus"> {isOpen && <FaPlus />} </div>
        </NavLink>

        <NavLink to="/analytics" activeClassName="active" className="link">
          <div className="icon">
            <MdOutlineEqualizer />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={linkTextAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link-name"
              >
                Analytics
              </motion.div>
            )}
          </AnimatePresence>
        </NavLink>

        <NavLink to="/Monetize" activeClassName="active" className="link">
          <div className="icon">
            <BiSlideshow />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={linkTextAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link-name"
              >
                Monetize
              </motion.div>
            )}
          </AnimatePresence>
        </NavLink>
      </motion.div>

      <main
        style={{
          marginLeft: isOpen ? "220px" : "50px",
          transition: "margin-left 0.6s",
        }}
        ref={mainRef}
        onClick={handleClickOutside}
      >
        {children}
      </main>
    </div>
  );
}

export default Sidebar;

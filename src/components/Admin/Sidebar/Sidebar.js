import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCar,
  faGear,
  faLongArrowAltUp,
  faMessage,
  faRightFromBracket,
  faStar,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(window.innerWidth >= 768);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {window.innerWidth < 768 && (
        <button className="toggle-button baricon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-menu" style={{ background: "white" }}>
          <div className="sidebar-lighttext">
            <p>Inventory Management</p>
          </div>
          <NavLink
            to="/admin-allCars"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faCar} className="sidebar-icon" />
            <span>All Cars</span>
          </NavLink>
          <NavLink
            to="/admin-allselingcars"
            className="sidebar-item"
            activeClassName="active"
          >
            <img src="images/sale.png" alt="car" className="sidebar-icon" />
            <span>Cars for Sale</span>
          </NavLink>
          <NavLink
            to="/servicetable"
            className="sidebar-item"
            activeClassName="active"
          >
            <img src="images/sale.png" alt="car" className="sidebar-icon" />
            <span>Cars for Purchase</span>
          </NavLink>
          <NavLink
            to="/agentable"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faUserPlus} className="sidebar-icon" />
            <span>Selling Requests</span>
          </NavLink>
          <div className="sidebar-lighttext mt-3">
            <p>User Management</p>
          </div>
          <NavLink
            to="/admin-allusers"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
            <span>All Users</span>
          </NavLink>
          <NavLink
            to="/analytics"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faStar} className="sidebar-icon" />
            <span>Reviews</span>
          </NavLink>
          <NavLink
            to="/notification"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faMessage} className="sidebar-icon" />
            <span>Enquiries</span>
          </NavLink>
          <div className="sidebar-lighttext mt-3">
            <p>Test Drive Management</p>
          </div>
          <NavLink
            to="/message"
            className="sidebar-item"
            activeClassName="active"
          >
            <img src="images/car.png" alt="car" className="sidebar-icon" />
            <span>Test-Drive Requests</span>
          </NavLink>
          <div className="mt-5">
            <div className="sidebar-lighttext mt-3">
              <p>PROFILE</p>
            </div>
            <NavLink
              to="/message"
              className="sidebar-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faGear} className="sidebar-icon" />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to="/message"
              className="sidebar-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="sidebar-icon" />
              <span>Logout</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

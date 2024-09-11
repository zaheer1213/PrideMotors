import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookAtlas,
  faCar,
  faContactBook,
  faGear,
  faLongArrowAltUp,
  faMasksTheater,
  faMessage,
  faRightFromBracket,
  faStar,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { Button, Modal } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Sidebar() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const sidebarRef = useRef(null);
  const [show, setShow] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setAuth({
      token: "",
      isAuthenticated: false,
      isAdmin: false,
    });
    navigate("/");
  };

  const handleClose = () => {
    setShow(false);
  };
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
            to="/admin-buyingcars"
            className="sidebar-item"
            activeClassName="active"
          >
            <img src="images/sale.png" alt="car" className="sidebar-icon" />
            <span>Cars for Purchase</span>
          </NavLink>
          <NavLink
            to="/admin-sellingrequest"
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
            to="/admin-reviews"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faStar} className="sidebar-icon" />
            <span>Reviews</span>
          </NavLink>
          <NavLink
            to="/admin-enquiries"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faMessage} className="sidebar-icon" />
            <span>Enquiries</span>
          </NavLink>
          <NavLink
            to="/admin-conatctUs"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faContactBook} className="sidebar-icon" />
            <span>All Contacts</span>
          </NavLink>
          <NavLink
            to="/admin-blogs"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faBookAtlas} className="sidebar-icon" />
            <span>All Blogs</span>
          </NavLink>
          <div className="sidebar-lighttext mt-3">
            <p>Test Drive Management</p>
          </div>
          <NavLink
            to="/admin-testDrive"
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
            <NavLink to="" className="sidebar-item" activeClassName="active">
              <FontAwesomeIcon icon={faGear} className="sidebar-icon" />
              <span>Settings</span>
            </NavLink>

            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="sidebar-icon mt-2 pointer"
            />
            <span className="pointer" onClick={() => setShow(true)}>
              Logout
            </span>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleLogout}>
            Ok
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Sidebar;

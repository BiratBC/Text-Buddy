import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.logo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="form-check">
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={props.changeColor}
              style={{
                backgroundColor: "#352F44",
                borderColor: "#352F44",
              }}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onClick={props.changeColor}
              style={{
                backgroundColor: "#1A3636",
                borderColor: "#1A3636",
              }}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              onClick={props.changeColor}
              style={{
                backgroundColor: "#3C3D37",
                borderColor: "#3C3D37",
              }}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              onClick={props.changeColor}
              defaultChecked
              style={{
                backgroundColor: "rgb(31 33 33)",
                borderColor: "rgb(31 33 33)",
              }}
            />
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-1"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              
            />
            <label
              className="form-check-label mx-2"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Enable DarkMode" : "Disable DarkMode"}
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit" >
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
// Function based component name . propTypes  = {objects}
Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
// navbar.defaultProps = {
//   logo: "Set Logo here",
// };

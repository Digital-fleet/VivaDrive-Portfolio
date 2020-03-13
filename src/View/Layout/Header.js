import React, { Component } from "react";
import "../index.css";
import Logo from "../img/Logo.png";

class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed">
          {/* <a
            className="navbar-brand"
            href="/"
           
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={Logo} alt="Website Logo" className="logo_image" />
          </a> */}
          <button
            className="navbar-toggler font-weight-bold text-white  "
            style={{ background: "#b71c1c", padding: "2px", width: "70px" }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item  ">
                <a className="nav-link  login_btn text-dark" href="# ">
                  Products
                </a>
              </li>

              <li className="nav-item  ">
                <a className="nav-link  login_btn text-dark" href="# ">
                  Resources
                </a>
              </li>

              <li className="nav-item  ">
                <a className="nav-link  login_btn text-dark" href="# ">
                  Industries
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto">
              <img src={Logo} alt="Website Logo" className="logo_image" />
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  ">
                <a
                  className="nav-link  login_btn text-dark"
                  href="#c "
                  style={{ color: "rgb(183, 28, 28, 0.8)", marginRight: "0px" }}
                >
                  Log in/Sign up
                </a>
              </li>

              <li className="nav-item  ">
                <a
                  className="nav-link btn contact_btn text-dark"
                  href="#contactt"
                  rel="modal:open"
                >
                  Get a free quote
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

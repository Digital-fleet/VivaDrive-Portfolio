import React, { Component } from "react";
import google from "../img/Google.png";
import facebook from "../img/Facebook.png";
import twitter from "../img/Twitter.png";
import linkedin from "../img/Linkedin.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={{ marginTop: "50px" }}>
        <div className="row done">
          <div className="col-sm-4">
            <p className="font-weight-bold">
              Fleet management, Easier than ever.
            </p>
            <p style={{ marginTop: "-10px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>

            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ marginLeft: "-30px", marginTop: "10px" }}
            >
              <ul className="navbar-nav navv mr-auto ">
                <li className="nav-item nav-link   ">
                  <a
                    href=" https://www.linkedin.com/company/vivadrive/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ marginRight: "16px" }}
                  >
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      className="social_image"
                    />
                  </a>
                  <a
                    href="https://twitter.com/vivadriveio"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ marginRight: "16px" }}
                  >
                    <img
                      src={twitter}
                      alt="Linkedin"
                      className="social_image"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/pg/vivadriveio"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ marginRight: "16px" }}
                  >
                    <img
                      src={facebook}
                      alt="Linkedin"
                      className="social_image1"
                    />
                  </a>
                  <a
                    href=" https://medium.com/vivadrive"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={google} alt="Linkedin" className="social_image" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-3">
            <ul className="navbar-nav j">
              <li className="font-weight-bold">Products</li>
              <li>Products overview</li>
              <li>Digital Fleet</li>
              <li>Digital Fleet App</li>
              <li>Ev Recommend</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul className="navbar-nav j">
              <li className="font-weight-bold">VivaDrive for you</li>
              <li>Help center</li>
              <li>For Developers</li>
              <li>Data intregation</li>
              <li>Tools</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul className="navbar-nav j">
              <li className="font-weight-bold">Compnay</li>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

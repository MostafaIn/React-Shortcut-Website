import React, { Component } from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleActive = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-desktop">
              <Link to="/home">
                <img
                  src={require("../assets/icons/shortcut-logo.png")}
                  alt="shortcut-logo"
                />
              </Link>
            </div>
            <div className="logo-mobile">
              <Link to="/home">
                <img
                  src={require("../assets/icons/shortcut-logo-mobile.png")}
                  alt="shortcut-logo"
                />
              </Link>
            </div>
          </div>
          <nav>
            <ul className={this.state.isActive ? "menu active" : "menu"}>
              <li className="submenu">
                <a href="/#" className="submenu-btn">
                  About
                </a>
                <ul className="submenu-list">
                  <Link to="/story" className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Our story</a>
                  </Link>
                  <Link to="/team" className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Our team</a>
                  </Link>

                  <Link to="/faq" className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">FAQ</a>
                  </Link>
                  <Link to="/contact" className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Contact</a>
                  </Link>
                </ul>
              </li>
              <li className="submenu" id="events">
                <a className="submenu-btn" href="#events">
                  Events
                </a>
                <ul className="submenu-list">
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">What's on?</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">All events</a>
                  </li>
                </ul>
              </li>

              <li className="submenu" id="resources">
                <a className="submenu-btn" href="#resources">
                  Resources
                </a>
                <ul className="submenu-list">
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Blog</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Gallery</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Yearbook</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Whitepaper</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">For media</a>
                  </li>
                </ul>
              </li>
              <li className="submenu" id="partners">
                <a className="submenu-btn" href="#partners">
                  For partners
                </a>
                <ul className="submenu-list">
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Info</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Contact</a>
                  </li>
                </ul>
              </li>
              <li className="submenu" id="join">
                <a className="submenu-btn" href="#join">
                  Join
                </a>
                <ul className="submenu-list">
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Intern</a>
                  </li>
                  <li className="link">
                    <div>
                      <img
                        src={require("../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Volunteer</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="search">
            <img
              src={require("../assets/icons/search.png")}
              alt="search-icon"
            />
          </div>

          <div
            onClick={this.toggleActive}
            className={this.state.isActive ? "toggle active" : "toggle"}
          >
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

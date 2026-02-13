import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <NavLink to="/" className="logo">
                  <h1>Villa</h1>
                </NavLink>
                <ul className="nav">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/properatie">Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Alldeatail">Property Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="/DataApi">Apidata</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Allshop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Allcart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Allcontact">Contact Us</NavLink>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-calendar"></i> Schedule a visit
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger" href="/">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

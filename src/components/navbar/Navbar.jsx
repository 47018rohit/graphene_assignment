import React from "react";
import "./navbar.scss";

import {
  LocalShippingOutlined,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <section className="right-nav">
        <LocalShippingOutlined />
        <p>
          <span>Free Delivery</span>&nbsp;|&nbsp;
          <a href="/">Refund Policy</a>
        </p>
      </section>
      <section className="left-nav">
        <a href="/">Login</a>
        <section className="follow-us">
          <p>Follow US</p>
          <a href="/">
            <FacebookOutlined />
          </a>
          <a href="/">
            <LinkedIn />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Instagram />
          </a>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;

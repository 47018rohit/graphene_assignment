
import "./navbar.scss";

import {
  LocalShippingOutlined,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const Navbar = () => {
  const followUs = [FacebookOutlined, LinkedIn, Twitter, Instagram]

  return (
    <nav className="navbar-wrapper">
      <section className="left-nav">
        <SvgIcon component={LocalShippingOutlined} />
        <p>
          <a href="/">Free Delivery</a>&nbsp;|&nbsp;
          <a href="/">Refund Policy</a>
        </p>
      </section>
      <section className="right-nav">
        <a href="/">Login</a>
        <section className="follow-us">
          <p>Follow US</p>
          {
            followUs?.map(e => (
              <a href="/" key={`${e}`}>
                <SvgIcon component={e} sx={{fontSize: '15px'}} />
              </a>
            ))
          }

        </section>
      </section>
    </nav>
  );
};

export default Navbar;

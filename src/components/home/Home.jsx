import { useState } from "react";
import "./home.scss";

const Home = () => {
  let [menuSelected, setMenuSelected] = useState("");
  let [toggle, setToggle] = useState(false);

  

  const navbarMenu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  const handleClick = (e) => {
    if (e.name === "Our Products") {
      setMenuSelected(e.name);
      setToggle((e) => !e);
    }
  };

  return (
    <section id="home-wrapper">
      <nav className="navigation">
        <p>ShopKart</p>
        <section>
          <span>{"WISHLIST (0)"}</span>
          <span>{"BAG (0)"}</span>
        </section>
        <img src="/Star 1.png" alt="star1" className="star1" />
      </nav>
      <ul id="navbar">
        {navbarMenu?.map((e) => (
          <li key={e.name} id={e.id} onClick={() => handleClick(e)}>
            {e.name.toUpperCase()}
            {e.name === "Our Products" ? (
              <ul
                className={`productMenu ${
                  menuSelected === navbarMenu[2].name && toggle
                    ? "show"
                    : "hidden"
                }`}
              >
                <ul className="childMenu">
                  {e.child?.map((el) => (
                    <li key={el.name}>{el.name.toUpperCase()}</li>
                  ))}
                </ul>
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <section id="hero-text">
        <h1>Fresh</h1>
        <h1>2022</h1>
        <h1>Look</h1>
        <div className="orange-back"></div>
        <img src="/Star 3.png" alt="star3" className="star3" />
        <img
          src="/jessica-radanavong-IchPBHFD0pw-unsplash.png"
          alt="model"
          className="model"
        />
        <p className="price">
          OREGON JACKET <br /> $124{" "}
        </p>
        <img src="/Star 4.png" alt="star4" className="star4" />
        <div></div>
      </section>
      <div className="seeMore">
        <p>See more</p>
        <img src="/Vector.png" alt="see-more" />
      </div>
    </section>
  );
};

export default Home;

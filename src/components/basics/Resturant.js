import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import { AiTwotoneHome } from "react-icons/ai";
import Footerx from "./Footerx";


const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="./Resturant" className="active">
          <AiTwotoneHome /> Home
        </a>
        <a href="#news">Menu</a>
        <a href="./Footerx">Contact</a>
        <a href="#about">About</a>
        <span className="brandname"><h3>Groo<span>Min</span></h3></span>
      </div>

      {/* food navbar categar */}
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            BREAKFAST
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            LUNCH
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            EVENING
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            DINNER
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            ALL
          </button>
        </div>
      </nav>
          <MenuCard menuData={menuData} />
          

          {/* ------------------footer------------- */}
          <footer>
              <Footerx/>
          </footer>

    </>
  );
};

export default Resturant;

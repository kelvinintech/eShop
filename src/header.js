//rfce used for react boilerplate

import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div class="header ">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div class="header_logo">
          <StorefrontOutlined className="header_logoimage" fontSize="large" />
        </div>

        <h2 className="header_logotitle">eShop</h2>
      </Link>
      <div className="header_search">
        <input
          type="text"
          className="header_searchinput"
          placeholder="@kelvinintech"
        ></input>
        <SearchRoundedIcon className="header_searchicon"></SearchRoundedIcon>
      </div>

      <div className="header_nav">
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemone">Hello Guest</span>
            <span className="nav_itemtwo">Sign In</span>
          </div>
        </Link>
        <div className="nav_item">
          <span className="nav_itemone">Your </span>
          <span className="nav_itemtwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itembasket">
            <ShoppingBasketIcon className="itembasket" />

            <span className="nav_itemtwo basket_count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

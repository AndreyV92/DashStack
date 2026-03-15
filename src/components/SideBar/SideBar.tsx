import React from "react";

import cls from './SideBar.module.scss'
import { Link } from "react-router-dom";
import Weather from "../../pages/Weather/Weather";

const SideBar = () => {
  return (
    <div className={cls.SideBarStyle}>
      <h1> <span>Dash</span>Stack</h1>

      <ul>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Favorites</a>
        </li>
        <li>
          <a href="">Inbox</a>
        </li>
        <li>
          <a href="">Order Lists</a>
        </li>
        <li>
          <a href="">Product Stock</a>
        </li>
      </ul>

      <h3>PAGES</h3>

      <ul>
        <li>
          <Link to="Weather">Weather</Link>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Calender</a>
        </li>
        <li>
          <a href="">To-Do</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Invoice</a>
        </li>
        <li>
          <a href="">UI Elements</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Table</a>
        </li>
      </ul>

      <ul className={cls.settings}>
        <li>
          <a href="">Settings</a>
        </li>
        <li>
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

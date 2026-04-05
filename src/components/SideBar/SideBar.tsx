
import cls from "./SideBar.module.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={cls.SideBarStyle}>
      <h1>
        <span>Dash</span>Stack
      </h1>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="Weather">Weather</Link>
        </li>
        <li>
          <Link to="SearchFilms">SearchFilms</Link>
        </li>
        <li>
          <Link to="">Calender</Link>
        </li>
        <li>
          <Link to="Todo">To-Do</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>

      <ul className={cls.settings}>
        <li>
          <Link to="Settings">Settings</Link>
        </li>
        <li>
          <Link to="">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

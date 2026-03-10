import React from "react";

import cls from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  return (
    <button
      className={cls.hamburgerButton}
      aria-label="Открыть меню"
      aria-expanded="false"
    >
      <span className="cls.hamburgerLine"></span>
      <span className="cls.hamburgerLine"></span>
      <span className="cls.hamburgerLine"></span>
    </button>
  );
};

export default BurgerMenu;

import React, { useEffect } from "react";

import cls from "./Settings.module.scss";
import { useTheme } from "../../app/hooks/useTheme";

const Settings = () => {
  const { theme, toggleTheme } = useTheme()
  

  

  return (
    <div className={cls.wrapper}>
      <button onClick={toggleTheme} >
  Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
</button>
    </div>
  );
};

export default Settings;

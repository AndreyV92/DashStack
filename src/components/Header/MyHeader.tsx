import React, { useState } from "react";
import SearchInput from "../Input/SearchInput";
import cls from "./MyHeader.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Select from "../Select/Select";
import { Link } from "react-router-dom";

const MyHeader = () => {
  const [isLogin, setIslogin] = useState(false);

  return (
    <div className={cls.MyHeaderStyle}>
      <div className={cls.headerLeftPart}>
        <BurgerMenu />
        <SearchInput />
      </div>
      <div className={cls.headerRightPart}>
        <div className={cls.bellWrap}>
          <svg
            className={cls.bell}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path d="M18.88,15.65c-.26,0-.48-.21-.48-.48v-5.82c0-3.53-2.87-6.4-6.4-6.4-2.59,0-4.91,1.54-5.91,3.93-.1.24-.38.36-.62.26-.24-.1-.36-.38-.25-.62,1.15-2.75,3.81-4.52,6.79-4.52,4.06,0,7.35,3.3,7.35,7.35v5.82c0,.26-.21.48-.48.48Z" />
            <path d="M5.12,15.65c-.26,0-.48-.21-.48-.48v-5.82c0-.36.03-.71.08-1.07.04-.26.28-.45.54-.4.26.04.44.28.4.54-.05.31-.07.62-.07.93v5.82c0,.26-.21.48-.48.48Z" />
            <path d="M19.41,18.83h-.53c-.26,0-.48-.21-.48-.48s.21-.48.48-.48h.53c.61,0,1.11-.5,1.11-1.11s-.5-1.11-1.11-1.11H4.59c-.61,0-1.11.5-1.11,1.11s.5,1.11,1.11,1.11h12.39c.26,0,.48.21.48.48s-.21.48-.48.48H4.59c-1.14,0-2.06-.93-2.06-2.06s.93-2.06,2.06-2.06h14.81c1.14,0,2.06.93,2.06,2.06s-.93,2.06-2.06,2.06Z" />
            <path d="M12,22c-2.2,0-4.18-1.4-4.92-3.49-.09-.25.04-.52.29-.61.25-.09.52.04.61.29.61,1.71,2.22,2.86,4.02,2.86s3.41-1.15,4.02-2.86c.09-.25.36-.38.61-.29.25.09.38.36.29.61-.74,2.09-2.72,3.49-4.92,3.49Z" />
          </svg>
          <span className={cls.count}>1</span>
        </div>

        <div className={cls.choise}>
          <img src="src\image\UK Flag.png" alt="флаг" />
          <Select />
        </div>

        {!isLogin ? (
          <Link to="/Login">Вход</Link>
          
        ) : (
          <div className={cls.profile}>
            <img src="src\image\user.png" alt="" />
            <div>
              <p className="userName">Moni Roy</p>
              <p className="userRole">Admin</p>
            </div>
          </div>
        )}

        <span className={cls.more}>
          <img className={cls.shape} src="src\image\Shape.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default MyHeader;

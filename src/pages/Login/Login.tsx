import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./Login.module.scss";
import axios from "axios";
import type { TUser } from "../../types";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<TUser>({
    id: Date.now(),
    name: "",
    serName: "",
    password: "",
  });

  const handleChangeValue = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUser((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const featchLogin = async (user: TUser) => {
    const response = await axios.post(`http://localhost:3001/users`, {
      name: user.name,
      serName: user.serName,
      password: user.password,
    });

    return response.data;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (user.name !== "" && user.serName !== "" && user.password.length >= 5) {
      featchLogin(user);
      console.log("отправлено");
    } else {
      console.log("не отправлено");
    }
  };

  return (
    <div className={cls.wrapper}>
      <form className={cls.form} action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          Введите имя:
          <input
            value={user.name}
            onChange={(e) => handleChangeValue("name", e)}
            type="text"
            placeholder="Введите имя"
          />
        </label>
        <label htmlFor="">
          Введите фамилию:
          <input
            value={user.serName}
            onChange={(e) => handleChangeValue("serName", e)}
            type="text"
            placeholder="Введите фамилию"
          />
        </label>
        <label htmlFor="">
          Введите пароль:
          <input
            value={user.password}
            onChange={(e) => handleChangeValue("password", e)}
            type="password"
            placeholder="Введите пароль"
          />
        </label>
        <button className={cls.btn} type="submit">
          отправить
        </button>
      </form>

      <button className={cls.btn} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};

export default Login;

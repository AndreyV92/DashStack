import React, { useEffect, useState } from "react";
import ButtonToBack from "../../components/ButtonToBack/ButtonToBack";
import Input from "../../shared/ui/components/Input/Input";
import { CiSearch } from "react-icons/ci";
import cls from "./Films.module.scss";

import { fetchFilmsData } from "../../app/slices/films/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { SyncLoader } from "react-spinners";

const Films: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatch();
  const { filmsData, isLoading } = useAppSelector((state) => state.films);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchFilmsData());
  }, [dispatch]);

  if (isLoading)
    return (
      <SyncLoader
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
        color="#f80b0b"
        margin={10}
      />
    );

  console.log(filmsData);

  const filtredFilms = () => {
    if (!inputValue.trim()) return filmsData;
    const lowerValue = inputValue.toLowerCase();

    if (!filmsData) return [];

    return filmsData.filter((film) => {
      return film?.name?.toLowerCase().includes(lowerValue);
    });
  };

  return (
    <div className={cls.filmsStyle}>
      <div className={cls.searchBox}>
        <CiSearch className={cls.searchIcon} />
        <Input
          classNames={[cls.inputStyles]}
          type="text"
          placeholder="Введите название фильма "
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <ul className={cls.filmsList}>
        {filtredFilms()?.map((film) => (
          <li key={film.id} className={cls.filmCard}>
            <h3 className={cls.cardTitle}>{film?.name}</h3>
            <div className={cls.cardWrapper}>
              <img className={cls.img} src={film?.poster?.url} alt="Постер" />
              <div className={cls.cardDescr}>
                <p className={cls.year}>{film?.year}</p>
                <p className={cls.description}>{film?.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ButtonToBack />
    </div>
  );
};

export default Films;

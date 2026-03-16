import React, { useEffect, useState, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { fetchWeatherData } from "../../app/slices/weather/weatherSlice";
import type { TCity } from "../../types";

import cls from "./Weather.module.scss";

const cityes: TCity[] = [
  { name: "Москва", latitude: 55.45, longitude: 37.37 },
  { name: "Санкт-Петербург", latitude: 59.57, longitude: 30.19 },
  { name: "Новосибирск", latitude: 55.01, longitude: 82.55 },
];

const currentDate = new Date().toLocaleDateString();

const Weather = () => {
  const dispatch = useAppDispatch();
  const { weatherData } = useAppSelector((state) => state.weather);

  const [city, setCity] = useState<TCity | null>(cityes[0]);

  // const normalizeWeatherData =
  //   typeof weatherData === "object" && weatherData !== null
  //     ? Object.entries(weatherData?.hourly)
  //     : [];

  const normalizedWeather = weatherData?.hourly.time.map((time, index) => ({
    time,
    temperature: weatherData.hourly.temperature_2m[index],
  }));

  console.log(normalizedWeather);

  const date = normalizedWeather?.[0]?.time.split("T")[0];
  const temperature = normalizedWeather?.[0]?.temperature;

  const sevenDays = normalizedWeather
    ?.filter((item) => item.time.includes("07:00"))
    .slice(0, 7);
  const transformDate = new Date().toLocaleString();

  console.log(date);
  console.log(transformDate);

  // if(!normalizedWeather?.length) return 'ошибка'

  useEffect(() => {
    city &&
      dispatch(
        fetchWeatherData({
          latitude: city?.latitude,
          longitude: city?.longitude,
        }),
      );
  }, [city, dispatch]);

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = cityes.find((city) => city.name === e.target.value);

    selectedCity && setCity(selectedCity);
  };

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Прогноз погоды</h1>

      <div className={cls.city}>
        <p>Город: </p>

        <select
          className={cls.select}
          onChange={(e) => handleChangeCity(e)}
          value={city?.name || ""}
        >
          {cityes.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className={cls.todayDay}>
        <span>Прогноз на сегодня </span>{date}:
        <span> {temperature} </span>
      </div>

      <h2 className={cls.subTitle}>Прогноз на неделю:</h2>
      <ul className={cls.sevenDay}>
        {sevenDays?.map((day, index) => (
          <li key={index}>
            {day.time} <span>{day.temperature} C</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;

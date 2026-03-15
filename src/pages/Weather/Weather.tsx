import React, { useEffect, useState, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { fetchWeatherData } from "../../app/slices/weather/weatherSlice";
import type { TCity, TCityes } from "../../types";

const Weather = () => {
  const dispatch = useAppDispatch();
  const { weatherData } = useAppSelector((state) => state.weather);

  const [city, setCity] = useState<TCity | null>(null);
  console.log(city)

  const cityes: TCityes[] = [
    { name: "Москва", latitude: 55.45, longitude: 37.37 },
    { name: "Санкт-Петербург", latitude: 59.57, longitude: 30.19 },
    { name: "Новосибирск", latitude: 55.01, longitude: 82.55 },
  ];

  // const normalizeWeatherData =
  //   typeof weatherData === "object" && weatherData !== null
  //     ? Object.entries(weatherData?.hourly)
  //     : [];

  const normalizedWeather = weatherData?.hourly.time.map((time, index) => ({
    time,
    temperature: weatherData.hourly.temperature_2m[index],
  }));
  
  // if(!normalizedWeather) return 

  // const dateAndTime = normalizedWeather[0].time.split('T')
  // console.log(dateAndTime)

  console.log(normalizedWeather)

  useEffect(() => {
    city &&
      dispatch(
        fetchWeatherData({
          latitude: city?.latitude,
          longitude: city?.longitude,
        }),
      );
  }, [city]);

  console.log(normalizedWeather)

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = cityes.find((city) => city.name === e.target.value);

    selectedCity && setCity(selectedCity);
  };

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <p>Город: </p>

      <select onChange={(e) => handleChangeCity(e)}>
        {cityes.map((city) => (
          <option value={city.name}> {city.name} </option>
        ))}
      </select>
      <p>Дата : {}</p>
      
    </div>
  );
};

export default Weather;

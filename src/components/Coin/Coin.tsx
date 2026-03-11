import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {  fetchCoinsData, changeSelectCoin, changeStartYear, changeEndYear } from "../../app/slices/coins/coinsSlice";

const Coin = () => {
  const { coinsData, selectCoin, startYear, endYear} = useAppSelector((state) => state.coins);
  const dispatch = useAppDispatch();

  const normalizeData =
    typeof coinsData === "object" && coinsData !== null
      ? Object.entries(coinsData?.rates)
      : [];

      const price = normalizeData.find(
    ([fiatName]) => fiatName === selectCoin,
  )?.[1];


  useEffect(() => {
    dispatch(fetchCoinsData(startYear ?? "2020"));
  }, [startYear]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <select
        style={{ border: "1px solid black" }}
        value={selectCoin}
        onChange={(e) => dispatch(changeSelectCoin(e.target.value))}
      >
        <option>Выберите монету</option>
        {normalizeData?.map(([fiatName, fiatPrice]) => (
          <option id={fiatName} value={fiatName}>
            {fiatName}
          </option>
        ))}
      </select>

      <span>C</span>
      <select
        style={{ border: "1px solid black" }}
        value={startYear}
        onChange={(e) => dispatch(changeStartYear(e.target.value))}
      >
        <option value="">Выберите год</option>
        {Array.from(
          { length: 100 },
          (_, index) => new Date().getFullYear() - index,
        ).map((date) => (
          <option value={date}>{date}</option>
        ))}
      </select>

      <span>-По</span>
      <select
        style={{ border: "1px solid black" }}
        value={endYear}
        onChange={(e) => dispatch(changeEndYear(e.target.value))}
      >
        <option value="">Выберите год</option>
        {Array.from(
          { length: 100 },
          (_, index) => new Date().getFullYear() - index,
        ).map((date) => (
          <option value={date}>{date}</option>
        ))}
      </select>

      <span>Стоимость на данный год:</span>

      {selectCoin && <span>{price?.toFixed(2)} $</span>}

      
    </div>
  );
};

export default Coin;

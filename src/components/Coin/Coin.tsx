import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { changeselectDate, fetchCoinsData, changeSelectCoin } from "../../app/slices/coins/coinsSlice";

const Coin = () => {
  const { coinsData, selectCoin, selectDate} = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  const normalizeData =
    typeof coinsData === "object" && coinsData !== null
      ? Object.entries(coinsData?.rates)
      : [];

      const price = normalizeData.find(
    ([fiatName]) => fiatName === selectCoin,
  )?.[1];


  useEffect(() => {
    dispatch(fetchCoinsData(selectDate ?? "2020"));
  }, [selectDate]);

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
      <select
        style={{ border: "1px solid black" }}
        value={selectDate}
        onChange={(e) => dispatch(changeselectDate(e.target.value))}
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

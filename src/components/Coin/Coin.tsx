import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  fetchCoinsData,
  changeSelectCoin,
  changeStartYear,
  changeEndYear,
} from "../../app/slices/coins/coinsSlice";

const Coin = () => {
  const { coinsData, selectCoin, startDate, endDate } = useAppSelector(
    (state) => state.coins,
  );
  const { chartsData } = useAppSelector((state) => state.charts);
  const dispatch = useAppDispatch();

  {
    /* {Array.from(
          { length: 100 },
          (_, index) => new Date().getFullYear() - index,
        ).map((date) => (
          <option value={date}>{date}</option>
        ))} */
  }

  // onChange={(e) => dispatch(changeStartYear(e.target.value))}



  const normalizeData =
    typeof coinsData === "object" && coinsData !== null
      ? Object.entries(coinsData?.rates)
      : [];

  const price = normalizeData.find(
    ([fiatName]) => fiatName === selectCoin,
  )?.[1];

  const normalizeChartsData =
    typeof chartsData === "object" && chartsData !== null
      ? Object.entries(chartsData?.rates)
      : [];

  const chartsStartPrice = normalizeChartsData.find(
    ([fiatPrice]) => fiatPrice === startDate,
  )?.[1];

  const chartsEndPrice = normalizeChartsData.find(
    ([fiatPrice]) => fiatPrice === endDate,
  )?.[1];
  // console.log(normalizeChartsData);
  console.log(chartsStartPrice);
  console.log(chartsEndPrice);

  useEffect(() => {
    dispatch(fetchCoinsData(startDate));
  }, [startDate, endDate]);

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
      <input 
        type="date"
        style={{ border: "1px solid black" }}
        value={startDate}
        onChange={(e) => dispatch(changeStartYear(e.target.value))}
      />

      <span>-По</span>
      <input 
        type="date"
        style={{ border: "1px solid black" }}
        value={endDate}
        onChange={(e) => dispatch(changeEndYear(e.target.value))}
      />

      {/* <span> {startDate}: </span>
      {selectCoin && <span>{} $</span>}

      <span> {endDate}: </span>
      {selectCoin && <span>{} $</span>} */}
    </div>
  );
};

export default Coin;

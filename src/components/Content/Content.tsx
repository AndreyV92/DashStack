import React, { useEffect } from "react";
import cls from "./Content.module.scss";
// import type { TCard } from "../../types";
import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { fetchCardsData } from "../../app/slices/cards/cardsSlice";
import { SyncLoader } from "react-spinners";
import Coin from "../Coin/Coin";
import Chart from "../Chart/Chart";

const Context = () => {
  const dispatch = useAppDispatch();
  const { cardsData, isLoading } = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCardsData());
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


  return (
    <div className={cls.wrapper}>
      <h1>Dashboard</h1>
      {cardsData && (
        <div style={{ display: "flex", gap: "30px" }}>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              current_price={card.current_price}
            />
          ))}
        </div>
      )}
      <div style={{ margin: "20px 0" }}>
        <h3 style={{ marginBottom: "10px" }}>История курса монеты</h3>
        <div>
          <Coin />
        </div>
      </div>

        <Chart />

      //авторизация
    </div>
  );
};

export default Context;

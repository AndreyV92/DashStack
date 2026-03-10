import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { fetchCardsData } from "../../app/slices/cards/cardsSlice";
import Card from "../Card/Card";

const Cards = () => {

 const dispatch = useAppDispatch();
  const { cardsData} = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCardsData());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};

export default Cards;

import type { TCardProps } from "../../types";
import cls from "./Card.module.scss";

const Card = ({ name, image, current_price }: TCardProps) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.left}>
        <h1> {name} </h1>
        <p>Текущая цена:</p>
        <span> {current_price}$ </span>
      </div>
      <div className={cls.right}>
        <img className={cls.img} src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;

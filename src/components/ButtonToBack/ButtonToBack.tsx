import React from "react";
import { useNavigate } from "react-router-dom";
import cls from "./ButtonToBack.module.scss";
import Button from "../../shared/ui/components/Button/Button";

const ButtonToBack = () => {
  const navigate = useNavigate();

  return (
    <Button classNames={[cls.btn]} onClick={() => navigate(-1)}>
      Назад
    </Button>
  );
};

export default ButtonToBack;

import React from "react";
import { useNavigate } from "react-router-dom";

import { MediumIcon } from "../../svg/icon-medium";
import { TelegramIcon } from "../../svg/icon-telegram";
import { TwitterIcon } from "../../svg/icon-twitter";
import "./style.scss";

type Props = { title: string; origin: string };

export const FoodTitle: React.FC<Props> = ({ title, origin }) => {
  const navigate = useNavigate();
  const handleclick = () => navigate("/add");

  return (
    <div className="iconbar">
      <div className="flag">
        <img src={`https://flagsapi.com/${origin}/shiny/24.png`} alt="" />
        <div className="recipe">{title}</div>
      </div>
      <div className="icon-btn-group">
        <div className="socials">
          <TwitterIcon />
          <TelegramIcon />
          <MediumIcon />
        </div>
        <div className="btn-add" onClick={handleclick}>
          + Add Recipe
        </div>
      </div>
    </div>
  );
};

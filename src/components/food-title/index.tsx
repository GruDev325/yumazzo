import React from "react";
import { useNavigate } from "react-router-dom";

import Spain from "../../img/spain.png";
import M from "../../img/M.png";
import telegram from "../../img/telegram.png";
import twitter from "../../img/twitter.png";
import world from "../../img/world.png";
import { Select } from "../select";
import { ChevronLeft } from "../../svg/chevron-left";

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
          <img src={twitter} alt="no" />
          <img src={telegram} alt="no" />
          <img src={M} alt="no" />
        </div>
        <div className="btn-add" onClick={handleclick}>
          + Add Recipe
        </div>
      </div>
    </div>
  );
};

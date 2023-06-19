import React, { useMemo } from "react";
import Paella from "../../img/paella.png";

type Props = {
  recipe: string;
  description: string;
  difficulty: number;
};

export const FoodDetail: React.FC<Props> = (props) => {
  const difficults = useMemo<{
    [key: number]: { label: string; color: string };
  }>(
    () => ({
      1: { label: "Hard", color: "#41479B" },
      2: { label: "Medium", color: "#17CFC4" },
      3: { label: "Easy", color: "#6CF600" },
    }),
    []
  );
  return (
    <div className="description">
      <div
        className="body"
        style={{
          background: (difficults[props.difficulty] || difficults[1])?.color,
        }}
      >
        <div className="header">
          <img src={Paella} alt="no" />
          <div className="title">{props.recipe}</div>
        </div>
        <div className="content">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

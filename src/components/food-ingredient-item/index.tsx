import React from "react";
import { Ingredient } from "../../const/type";

export const FoodIngredientItem: React.FC<Ingredient> = (props) => {
  return (
    <div className="element">
      <div className="upper">{props.name}</div>
      {props.values.length === 1 ? (
        <div className={props.values[0].className}>{props.values[0].text}</div>
      ) : props.values.length === 2 ? (
        <div>
          <span className={props.values[0].className}>
            {props.values[0].text}
          </span>
          {props.values[1].text ? (
            <>
              &nbsp;/&nbsp;
              <span className={props.values[1].className}>
                {props.values[1].text}
              </span>
            </>
          ) : null}
        </div>
      ) : (
        <div className="lower">&nbsp;</div>
      )}
    </div>
  );
};

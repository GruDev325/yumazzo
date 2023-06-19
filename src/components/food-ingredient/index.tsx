import React from "react";

import { FoodIngredientItem } from "../food-ingredient-item";
import { Ingredient } from "../../const/type";

type Props = { items: Ingredient[] };

export const FoodIngredient: React.FC<Props> = ({ items }) => {
  return (
    <div className="ingredient">
      <div className="row">
        {items.map((item: Ingredient) => (
          <FoodIngredientItem
            name={item.name}
            values={item.values}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};

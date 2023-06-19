import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Foodingredient from "../../components/FoodIngredient";
import { FoodTitle } from "../../components/food-title";

import { Select } from "../../components/select";

import "./style.scss";
import { DifficultTypeIcon } from "../../svg/difficult-type";
import { FoodDetail } from "../../components/foot-detail";

const LandingPage = () => {
  const allRecipes: any[] = useSelector(
    (state: any) => state.recipe.allRecipes
  );

  const [selectedIndex, setSeletedIndex] = useState<number>(0);

  const difficults = useMemo<{
    [key: number]: { label: string; color: string };
  }>(
    () => ({
      1: { label: "Hard", color: "#FF003D" },
      2: { label: "Medium", color: "#F63B00" },
      3: { label: "Easy", color: "#6CF600" },
    }),
    []
  );

  return (
    <div className="landingpage">
      <div className="container">
        <div className="search">
          <Select
            isSearchable
            onChange={(value) => setSeletedIndex(value.value)}
            options={allRecipes.map((item, index) => ({
              label: (
                <div className="recipe-select-item" key={index}>
                  <div className="country">
                    <img
                      src={`https://flagsapi.com/${item.origin}/shiny/24.png`}
                      alt=""
                    />
                    {item.name}
                  </div>
                  <div className="info">
                    <div
                      className="icon"
                      style={{
                        color: (
                          difficults[item.difficulty as number] || difficults[1]
                        )?.color,
                      }}
                    >
                      <DifficultTypeIcon />
                    </div>
                    {
                      (difficults[item.difficulty as number] || difficults[1])
                        ?.label
                    }
                    <div className="divider"></div>
                    <div className="volume">{`${item.volume}min`}</div>
                  </div>
                </div>
              ),
              value: index,
              search: item.name,
            }))}
          />
        </div>

        <FoodTitle
          title={allRecipes[selectedIndex].name}
          origin={allRecipes[selectedIndex].origin}
        />

        <FoodDetail
          recipe={allRecipes[selectedIndex].name}
          description={allRecipes[selectedIndex].description}
          difficulty={allRecipes[selectedIndex].difficulty}
        />

        <Foodingredient items={allRecipes[selectedIndex].ingredient} />
      </div>
    </div>
  );
};
export default LandingPage;

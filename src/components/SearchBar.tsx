import React, { useEffect, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

type SearchType = {
  recipes: string[];
  onSelectIndex: (value: number) => void;
};
export default function SearchBar(props: SearchType) {
  const { recipes, onSelectIndex } = props;
  const [matchedRecipes, setMatchedRecipes] = useState<string[]>(recipes);
  const [showDishList, setShowDishList] = useState<boolean>(false);

  const handleClickOutside = () => {
    setShowDishList(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const selecteRecipeAction = (item: number) => {
    onSelectIndex(item);
    setShowDishList(false);
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const recipe = e.target?.value;
    if (!e.target?.value) setMatchedRecipes(recipes);
    const _matched = recipes
      .map((item) => item.toLowerCase())
      .filter((item) => item.includes(recipe.toLowerCase()));
    setMatchedRecipes(_matched);
  };

  return (
    <div className="search" ref={ref}>
      <input
        role="search-input"
        placeholder="&#128269; Search cousine"
        onChange={onChangeInput}
        onFocus={() => setShowDishList(true)}
      />
      <ul className={`recipe-list-container ${showDishList ? "" : "hide"}`}>
        {recipes.map((item, index) =>
          matchedRecipes.includes(item.toLowerCase()) ? (
            <li onClick={() => selecteRecipeAction(index)} key={index}>
              {item}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

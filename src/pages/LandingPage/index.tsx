import './style.scss';
import React, { useEffect, useState } from 'react';
import FoodTitle from '../../components/FoodTitle';
import FoodDetail from '../../components/FoodDetail';
import Foodingredient from '../../components/FoodIngredient';
import { DATA } from '../../const/const';
import { DataObject, Recipe } from '../../const/type';
import SearchBar from '../../components/SearchBar';
import { useSelector } from 'react-redux';

const LandingPage = () => {
    const allRecipes: any[] = useSelector((state: any) => state.recipe.allRecipes);
    const recipeKeys = allRecipes.map((item: any) => item.name);

    const [selectedIndex, setSeletedIndex] = useState<number>(0);

    return (
        <div className="landingpage">
            <div className="container">
                <SearchBar recipes={recipeKeys} onSelectIndex={setSeletedIndex}/>

                <FoodTitle title={allRecipes[selectedIndex].name} />

                <FoodDetail recipe={allRecipes[selectedIndex].name} description={allRecipes[selectedIndex].description} />

                <Foodingredient items={allRecipes[selectedIndex].ingredient} />
            </div>
        </div>
    );
}
export default LandingPage;
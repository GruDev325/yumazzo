import './style.scss';
import React, { useEffect, useState } from 'react';
import FoodTitle from '../../components/FoodTitle';
import FoodDetail from '../../components/FoodDetail';
import Foodingredient from '../../components/FoodIngredient';
import { DATA } from '../../const/const';
import { DataObject, Recipe } from '../../const/type';
import SearchBar from '../../components/SearchBar';

const LandingPage = () => {
    const dishes = Object.keys(DATA);
    const [selectedDish, setSeletedDish] = useState<string>(dishes[0]);

    return (
        <div className="landingpage">
            <div className="container">
                <SearchBar dishes={dishes} onSelectDish={setSeletedDish}/>

                <FoodTitle title={selectedDish} />

                <FoodDetail recipe={DATA[selectedDish].recipe} description={DATA[selectedDish].description} />

                <Foodingredient items={DATA[selectedDish].ingredient} />
            </div>
        </div>
    );
}
export default LandingPage;
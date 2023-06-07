import React from 'react'
import FoodIngredientItem from './FoodIngredientItem';
import { Ingredient } from '../const/type';

export default function Foodingredient({items}: {items: Ingredient[]}) {
    return (
        <div className="ingredient">
            <div className="row">
                {
                    items.map((item: Ingredient) => (
                        <FoodIngredientItem name={item.name} values={item.values} key={item.name}/>
                    ))
                }
            </div>
        </div>
    )
};
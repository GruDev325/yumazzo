import React from 'react'
import { Ingredient } from '../const/type';
export default function FoodIngredientItem(props: Ingredient) {
    return (
        <div className="element">
            <div className="upper">{props.name}</div>
            {
                props.values.length === 1
                    ? (<div className={props.values[0].className}>{props.values[0].text}</div>)
                    : props.values.length === 2 ? (<div>
                        <span className={props.values[0].className}>{props.values[0].text}</span>
                        &nbsp;/&nbsp;
                        <span className={props.values[1].className}>{props.values[1].text}</span>
                    </div>)
                        : <div className="lower">&nbsp;</div>
            }
        </div>
    )
}

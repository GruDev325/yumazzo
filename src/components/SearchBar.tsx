import React, { useEffect, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';

type SearchType = {
    dishes: string[];
    onSelectDish: (value: string) => void;
}
export default function SearchBar(props: SearchType) {
    const {dishes, onSelectDish} = props;
    const [matchedDishes, setMatchedDishes] = useState<string[]>(dishes);
    const [showDishList, setShowDishList] = useState<boolean>(false);

    const handleClickOutside = () => {
        setShowDishList(false);
    }

    const ref = useOutsideClick(handleClickOutside);

    const dishListAction = (item: string) => {
        onSelectDish(item);
        setShowDishList(false);
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dish = e.target?.value;
        if (!e.target?.value) setMatchedDishes(dishes);
        const _matched = dishes.filter((item) => item.toLowerCase().includes(dish));
        setMatchedDishes(_matched);
    }

    return (
        <div className="search" ref={ref}>
            <input
                role="search-input"
                placeholder="&#128269; Search cousine"
                onChange={onChangeInput}
                onFocus={() => setShowDishList(true)}
                 />
            <ul className={`dish-list-container ${showDishList ? '' : 'hide'}`}>
                {
                    matchedDishes.map(item => <li onClick={() => dishListAction(item) } key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}

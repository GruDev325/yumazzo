import React from 'react';
import { useNavigate } from 'react-router-dom';

import Spain from '../img/spain.png';
import M from '../img/M.png';
import telegram from '../img/telegram.png';
import twitter from '../img/twitter.png';
import world from '../img/world.png';

export default function FoodTitle(props: { title: string }) {
    const navigate = useNavigate();
    const handleclick = () => navigate('/add');

    return (
        <div className="iconbar">
            <div className="flag">
                <img src={Spain} alt="no" />
                <div className="recipe">{props.title}</div>
            </div>
            <div className='icon-btn-group'>
                <div className="socials">
                    <img src={twitter} alt="no" />
                    <img src={telegram} alt="no" />
                    <img src={M} alt="no" />
                </div>
                <div className='btn-add'  onClick={handleclick}>+ Add Recipe</div>
            </div>
        </div>
    );
}
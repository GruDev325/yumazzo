import React from 'react';
import Spain from '../img/spain.png';
import M from '../img/M.png';
import telegram from '../img/telegram.png';
import twitter from '../img/twitter.png';
import world from '../img/world.png';

export default function FoodTitle(props: { title: string }) {
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
                <div className='btn-add'>+ Add Recipe</div>
            </div>
        </div>
    );
}
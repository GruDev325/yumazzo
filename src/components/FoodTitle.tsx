import React from 'react';
import Spain from '../img/spain.png';
import M from '../img/M.png';
import telegram from '../img/telegram.png';
import twitter from '../img/twitter.png';
import world from '../img/world.png';

export default function FoodTitle(props: {title: string}) {
    return (
        <div className="icons">
            <div className="flag">
                <img src={Spain} alt="no" />
                <div className="dish">{props.title}</div>
            </div>
            <div className="socials">
                <img src={twitter} alt="no" />
                <img src={telegram} alt="no" />
                <img src={M} alt="no" />
                <img src={world} alt="no" />
            </div>
        </div>
    );
}
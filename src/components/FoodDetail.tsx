import React from 'react'
import Paella from '../img/paella.png';

export default function FoodDetail(props: {recipe: string, description: string}) {
    return (
        <div className="description">
        <div className="body">
          <div className="header">
            <img src={Paella} alt="no" />
            <div className="title">{props.recipe}</div>
          </div>
          <div className="content">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    )
}

import React from 'react';
import './Card.css'

const Card = (props) => {
  return(
    <div className="cardContainer">
      <h1>
        {props.title}
      </h1>
      <img className="cardImg" src={props.image} alt=""/>
      <div>
        <h3>{props.date}</h3>
        <p>{props.explanation}</p>
      </div>
    </div>
  );
}

export default Card;
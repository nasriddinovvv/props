import React from "react";
import "./Card.css";

function Card({rasm, name, ish, soxa}) {
    return (
        <div className="card">
            <img src={rasm} alt={name} />
            <h2>{name}</h2>
            <p>{ish}</p>
            <p>{soxa}</p>
        </div>
    );
}


export default Card;
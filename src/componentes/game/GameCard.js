import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({ juego }) => {
    return (
        <div className="col">
            <div className="card" style={{ maxWidth: 500 }}>
                <img src={juego.image} className="card-img-top" alt={juego.id} />
                <div className="card-body">
                    <h5 className="card-title">{juego.name}</h5>
                    <p className="card-text"> Rating: {juego.metacritic}</p>
                    <p className="card-text">{juego.personaje_principal}</p>
                </div>
            </div>
        </div>
    )
}
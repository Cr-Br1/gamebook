import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router'; 
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from './custom/useForm';
import { GameCard } from './componentes/game/GameCard';

export const BusquedaScreen = () => {

    const [resultado, setResultado] = useState([]);

    const location = useLocation();

    const { busqueda = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        criterioBusqueda: busqueda
    });

    const { criterioBusqueda } = formValues;    

    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let text = formValues.criterioBusqueda || '';
        let item = todos.find(item => item.name === text);
        setResultado(item ? [item] : []);
        console.log('Item: ', item);
    }, [formValues.criterioBusqueda]);
  

    const navigate = useNavigate();
    const handleBusqueda = (e) => {
        e.preventDefault();
        console.log(criterioBusqueda);
        //Generamos el query string en la URL 
        navigate(`?busqueda=${criterioBusqueda}`);
    }

    console.log(resultado);

    return (
        <>
            <h1>Buscador</h1>
            <br />

            <div className="row">
                <div className="col-5">
                    <h4>Mi Búsqueda</h4>
                    <br />

                    <form onSubmit={handleBusqueda}>
                        <input
                            type="text"
                            className="form-control"
                            name="criterioBusqueda"
                            value={criterioBusqueda}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    <br />

                    {
                        (criterioBusqueda !== '' && resultado.length === 0)
                        && (<div className="alert alert-danger">
                            No existe el juego: {criterioBusqueda}
                        </div>)
                    }
                    
                    {
                        (criterioBusqueda === '') &&
                        <div className="alert alert-info">
                            Indica el criterio de búsqueda...
                        </div>
                    }

                    {
                        resultado && resultado.length > 0 ? (
                            resultado.map(item => (
                                <GameCard key={item.id}
                                    juego={item} />
                            ))
                        ) : (null)
                    }

                </div>
            </div>
        </>
    )

}
import React, { useEffect, useState } from 'react';
import { useFetch } from './useFetch'
import { InfoVideojuegos } from './InfoVideojuegos';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojue
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {
    const { loading, info } = useFetch('https://api.rawg.io/api/games?key=66140da1c45c43e39d9105b4f5ae400b&genres=' + genero)
    const [infoJuegos, setInfoJuegos] = useState([]);
    //Utilizamos useEffect para invocar la función getVideojuegos
    useEffect(() => {
        getVideojuegos()
        //console.log(info);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info]);

    const getVideojuegos = () => {
        if (!!info && info) {

            const juegos = info.results.map(juego => {
                return {
                    id: juego.id,
                    nombre: juego.name,
                    imagen: juego.background_image,
                    rating: juego.rating,
                    metacritic: juego.metacritic
                }
            })
            setInfoJuegos(juegos);
        }
    }
    return (

        <>

            {
                loading
                    ?
                    (
                        //Si loading es true, mostramos el mensaje 'loading' 
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <>

                            <h3 className="card-title">{genero}</h3>
                            {/*
                    Creamos la lista de juegos con la información que recuperamos de la invocación del api de RAWG,
                    utilizando la variable infoJuegos que obtuvimos en la desestructuración del hook useState.
                    */}
                            <div className="d-flex flex-wrap">
                                {
                                    infoJuegos.map(juego => {
                                        return <InfoVideojuegos key={juego.id} juego={juego} />
                                    })
                                }
                            </div>
                        </>
                    )
            }
        </>
    )
}
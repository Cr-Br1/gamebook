import React, { useState, useContext } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';
import { UserContext } from './hooks/userContext';

export const VideojuegosApp = () => {
    //Utilizamos el hook useState para inicializar la lista de generos de videojuegos.
    const [generos, setGeneros] = useState(['action']);
    
    const { user } = useContext(UserContext); 
 
    //console.log(user); 
    //Función que nos permite cambiar el estado de la lista de géneros para agregar
    // nuevos géneros a la lista.
    // const agregaGenero = () => {
    //     setGeneros(estadoActualGeneros => [...estadoActualGeneros, 'Nuevo Género']);
    // }

    return (
        <>
            <h1 >Consulta de Videojuegos</h1>
            <AgregaGenero setGeneros={setGeneros} />



            {/*
                Botón que vamos a utilizar para agregar un género a la lista. Al hacer clic se manda
                llamar la función agregaGenero.
            */}
            {/* <button type="button" className="btn btn-primary" onClick={agregaGenero}>Agregar Género</button> */}
            {/*
                Creamos la lista de géneros
            */}
            <ol className="list-group list-group-numbered">
                {
                    generos.map(genero => {
                        return <ResultadoVideojuegos key={genero} genero={genero} />
                    })
                }
            </ol>
        </>
    )
}
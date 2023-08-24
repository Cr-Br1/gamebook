import React from 'react';
import { useForm } from '../custom/useForm';
import { useFetch } from '../custom/useFetch';

export const GameCollectionAdd = ({ handleNewTodo }) => {
    const [{ descripcion }, handleInputChange, reset] = useForm({
        descripcion: ''
    });
    //console.log(descripcion);
    const { info } = useFetch('https://api.rawg.io/api/games/' + descripcion + '?key=5e2ac2c26fc24a86a72c54e058445716');

    const handleAddTodo = (e) => {
        //Evitamos el refresh del navegador con la función preventDefault()
        e.preventDefault();
        if (descripcion.trim().length === 0) {
            return;
        }
        console.log(info);
        const newGame = {
            id: info.id,
            name: info.name,
            image: info.background_image,
            metacritic: info.metacritic,
            done: false
        }
        // const nuevoTodo = {
        //     id: new Date().getTime(),
        //     desc: descripcion, //Esta descripcion la obtenemos de la variable 'descripcion' que obtuvimos utilizando el custom hook useForm,
        //     done: false
        // }
        //console.log(info);
        //Creamos el nuevo todo.
        handleNewTodo(newGame);
        //Reseteamos los valores del formulario.
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            < hr />
            <form onSubmit={handleAddTodo}>
                {
                    //En este input text estamos igualando value a la variable 'descripcion' que 
                    // obtuvimos al utilizar el custom hook useForm
                }
                <input
                    type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="Indica el TODO..."
                    autoComplete="off"
                    value={descripcion}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}

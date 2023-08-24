import React from 'react';
import { GameCollectionItem } from './GameCollectionItem';
//Componente para la lista de Todos. Recibe como argumentos el todoState y los métodos handleDeleteTodo 
// y handleCompleteTodo
export const GameCollection = ({ todoState, handleDeleteTodo, handleCompleteTodo }) => {
    return (
        <div className="d-flex flex-wrap justify-content-between" style={{paddingRight: "5rem", paddingLeft: "5rem", paddingBottom: "5rem" }}> 
            {
                todoState.map((todo, i) => (
                    /*
                    Se manda llamar el componente TodoListItem y se pasan sus parámetros. Para los que son 
                    funciones lo que estamos haciendo es pasar la referencia de dichas funciones.
                    */
                    <GameCollectionItem
                        todo={todo}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCompleteTodo={handleCompleteTodo}
                    />
                ))
            }
        </div>
    )
}

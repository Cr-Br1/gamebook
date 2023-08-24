import React from 'react';
//Este componente recibe como parámetro el todo a mostrar, su índice, y las referencias a las funciones handle.
export const GameCollectionItem = ({ todo, handleDeleteTodo, handleCompleteTodo }) => {
    return (
        // <li
        //     key={todo.id}
        //     className="list-group-item"
        // >
        //     <p

        //         className={`${todo.done && 'complete'}`}
        //         onClick={() => handleCompleteTodo(todo.id)}
        //     >
        //         {index + 1}. {todo.desc}
        //     </p>
        //     <button
        //         className="btn-danger"
        //         onClick={() => handleDeleteTodo(todo.id)}
        //     >
        //         Borrar
        //     </button>
        // </li>
        <div key={todo.id} className='card' style={{width: "18rem"}}>
            <img src={todo.image} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{todo.name}</h5>
                    <p className="card-text">{`Rating:${todo.metacritic}`}</p>
                    <button className="btn btn-danger"
                    onClick={() => handleDeleteTodo(todo.id)}
                    >
                        Borrar</button>
                </div>
        </div>
    )
}

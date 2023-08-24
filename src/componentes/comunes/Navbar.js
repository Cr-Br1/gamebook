import React, {useContext} from 'react';
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React.
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from './../../hooks/userContext';

export const Navbar = () => {

    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand"
                to="/"
            >
                Gamebook de {user.username}
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/*
    La propiedad 'to' sirve para indicar el route al que nos vamos a dirigir al hacer clic en la liga y con esto
    identifica qué componente
    va cargar para ser mostrado en la página. La propiedad 'exact' indica que debe ser la ruta exacta la que se
    tiene que indicar y enviar al Router.
    */}
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/consultavj"
                    >
                        Videojuegos
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/coleccion"
                    >
                        Mi Coleccion
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/buscador"
                    >
                        Mi librería de juegos
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/logs"
                    >
                        Consulta de logs
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/login"
                    >
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
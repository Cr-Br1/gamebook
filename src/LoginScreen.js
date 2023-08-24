import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './hooks/userContext';
import { useForm } from './custom/useForm';
export const LoginScreen = () => {
    const [values, handleInputChange] = useForm();
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const formatDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const Register = e => {
        e.preventDefault();
        
            fetch('http://localhost:8585/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then((respuesta) => {
                    return respuesta.json()
                })
                .then((info) => {
                    if(info.error != null){
                        fetch('http://localhost:8585/usuarios/'+values.correo, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                                }
                                })
                                .then((respuesta) => {
                                    return respuesta.json()
                                })
                                .then((info) => {
                                    fetch('http://localhost:8585/eventoLog/'+info.username, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(
                                    {
                                        "fechaEvento": formatDate(),
                                        "evento": "Log fallido en el portal"
                                    }
                                )
                            })
                            .then((respuesta) => {
                                
                            })
                            .then((info) => {
                               
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                                })
                                .catch((error) => {
                                    console.log(error);
                                })   
                        alert("Usuario o contraseña incorrectos");
                    }else{
                        fetch('http://localhost:8585/eventoLog/'+info.username, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(
                                    {
                                        "fechaEvento": formatDate(),
                                        "evento": "Login en el portal"
                                    }
                                )
                            })
                            .then((respuesta) => {
                                
                            })
                            .then((info) => {
                               
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                        setUser(info);
                        navigate('/consultavj');
                    }
                });
        
        
    };

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Gamebook</h1>
                    <p className="lead">¡Bienvenido a la página donde podrás consultar información de videojuegos!</p>
                    <br></br>
                    <p> Ingresa tus datos. </p>
                    <br></br>
                    <form onSubmit={Register}>
                        <label>Correo</label>
                        <input
                            value={values.correo || ''}
                            onChange={handleInputChange}
                            type="text"
                            name="correo"
                            className="form-control"
                            placeholder="Correo"
                            autoComplete="off"
                        ></input>
                        <br></br>
                        <label>Password</label>
                        <input
                            value={values.password || ''}
                            onChange={handleInputChange}
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="off"
                        ></input>
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </form>
                    {/* <button className="btn btn-primary"
                        onClick={() => {
                            let user = 'bruno';
                            console.log(user);
                            setUser({ id: user, password: 'admin' });
                            navigate("/consultavj");
                        }}
                    >
                        Ingresar
                    </button> */}

                </div>
            </div>
        </>
    )
}
import React, { useEffect } from 'react';
import { Mensaje } from '../effect/Mensaje';
import { useFormulario } from '../../custom/useFormulario';

export const FormularioConHook = () => {
    //Creamos el estado del formulario, cuyo estado inicial va ser un arreglo
    const [formState, handleInputChange] = useFormulario();

    //Desestructuramos el estado del formulario
    const { nombre, email } = formState;

    //Este useEffect se va disparar cuando se cree el componente por primera vez, por eso enviamos el arreglo de
    // dependencias vacío.
    useEffect(() => {
        console.log('Creación del componente por primera vez: useEffect ejecutado...');
        console.log(formState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Este useEffect se va disparar cada vez que se exista un cambio en formState. Por eso enviamos la variable
    // formState en el arreglo de dependencias.
    useEffect(() => {
        console.log('formState cambió...');
    }, [formState])

    //Este useEffect se va disparar cada vez que se exista un cambio en el email. Por eso enviamos la variable
    // email en el arreglo de dependencias.
    useEffect(() => {
        console.log('email cambió...');
    }, [email])

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            {/*
            Creamos el formulario
            */}
            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(nombre === 'Jorge') && <Mensaje />}
        </>
    )
}
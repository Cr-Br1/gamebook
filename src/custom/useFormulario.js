import { useState } from 'react';

export const useFormulario = (initialState = {nombre:'', email:''}) => {

    const [formState, setFormState] = useState(initialState);

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return [
        formState,
        handleInputChange
    ]
}
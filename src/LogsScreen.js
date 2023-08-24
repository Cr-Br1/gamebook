import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './hooks/userContext';
import { useFetch } from './custom/useFetch';
export const LogsScreen = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    //const [state, dispatch] = useReducer(fetchReducer, initialState)
    const { loading, info } = useFetch('http://localhost:8585/eventoLog/'+user.username);
    if(info != null){
    const logs = info;
    console.log(info);
    console.log(info[0]);
    }
    // for(let i=0; i<info.length; i++){
    //     console.log(info[i].fechaEvento);
    //     console.log(info[i].evento);
    // }
    return (
        <>
            <div>
                <h1>Logs de {user.username}</h1>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Evento</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {info != null && info.map((log, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{log.evento}</td>
                            <td>{log.fechaEvento}</td>
                        </tr>
                    ))}
                            
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


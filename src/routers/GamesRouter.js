import { React } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameCollectionApp } from '../videojuegos/GameCollectionApp';
import { VideojuegosApp } from '../VideojuegosApp';
import { LoginScreen } from '../LoginScreen';
import { BusquedaScreen } from '../BusquedaScreen';
import { LogsScreen } from '../LogsScreen';

export const GamesRouter = () => {

    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen/>}/>
                    <Route exact path='/consultavj'  element={<VideojuegosApp />} />
                    <Route exact path="/coleccion" element={<GameCollectionApp />} /> 
                    <Route exact path='/buscador' element={<BusquedaScreen />} />
                    <Route exact path='/logs' element={<LogsScreen />} />
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import Componentes from './Componentes';
import {Link}  from "react-router-dom";


export default function Atividade4() {
    return(
        <>
            <h1>Atividade 4</h1>
            <Componentes />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}

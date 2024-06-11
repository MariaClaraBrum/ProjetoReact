import React from 'react';
import {Link}  from "react-router-dom";
import App from "./ativ5-aula6"

export default function Atividade5() {
    return(
        <>
            <h1>Atividade 5</h1>
            <App />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}


import React from 'react';
import {Link}  from "react-router-dom";
// import Button from "./aula5"
import {Toolbar} from "./aula5"
import {App} from "./aula5"
import {Signup} from "./aula5"
import {Gallery} from "./aula5"
import {App2, Form, Counter, MovingDot, Form2} from "./aula5"

export default function Atividade4() {
    return(
        <>
            <h1>Atividade 4</h1>
            {/* < Button /> */}
            < Toolbar />
            {/* <App/> */}
            <Signup />
            <Gallery />
            <App2 />
            <Counter />
            <Form />
            <br />
            <br />
            <MovingDot />
            <br/>
            <Form2 />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}
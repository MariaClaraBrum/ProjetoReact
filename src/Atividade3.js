import React from 'react';
import ReactDOM from 'react-dom/client';
import Gallery from './Gallery';
import { ProfileTWO } from './Gallery';
import { TodoList } from './Gallery';
//import { Avatar } from './Gallery';
import { TodoListTWO } from './Gallery';
import {Link}  from "react-router-dom";


export default function Atividade3() {
    return(
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <ProfileTWO />
            <TodoList />
{/* <Avatar /> */}
            <TodoListTWO />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}

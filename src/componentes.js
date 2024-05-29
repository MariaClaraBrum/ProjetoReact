import React from 'react';

export function Button(){
    return (
<button onClick={function handleClick() {
    alert('You clicked me!');
}}>Click me</button>
    );
}

function AlertButton({ message, children}){
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar(){
    return (
        <div>
            <AlertButton message="Playing!">Play Movie</AlertButton>
            &nbsp;&nbsp;&nbsp;
            <AlertButton message="Uploading!">Upload Image</AlertButton>
        </div>
    );
}
import React from 'react';
import {useState, useEffect } from 'react';
import { sculptureList } from './Data.js';
import { Gallery2 } from './Data.js';
import {Image} from './Data.js';
import {Clock} from './Data.js';
import {createRoot} from 'react-dom/client';

// export default function Button({onClick, children}){
//     // function handleClick(){
//     //     alert('You clicked me!');
//     // }
// 	return(
//         // <button onclick={handleClick}>
//         //     {/* I don't do anything */}
//         //     Click me
//         // </button>
//         // <button onClick={function handleClick() {
//         // <button onClick={() => {
//         //     alert('You clicked me!');
//         // }}>
//         //     Click me
//         // </button>   
//         <button onClick={onClick}>
//             {children}
//         </button>     
//     );
// }


// function AlertButton({ message, children}){
//     return(
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     )
// }

// function PlayButton({ movieName}){
//     function handlePlayClick(){
//         alert(`Playing ${movieName}!`);
//     }
//     return(
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }

// function UploadButton(){
//     return(
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     );
// }

// export function App(){
//     return(
//         <>
//         <Button onSmash={() => alert('Playing!')}>
//             Play Movie
//         </Button>
//         <Button onSmash={() => alert('Uploading!')}>
//             Upload Movie
//         </Button>
//         </>
//     )
// }

export function App() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}
// export function Toolbar(){
//     return(
//         <div>
//             {/* <AlertButton message="Playing!">
//                 Play Movie
//             </AlertButton>
//             <AlertButton message="Uploading!">
//                 Upload Image
//             </AlertButton> */}
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton/>
//         </div>
//     );
// } 

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <>
//             <Button onClick={onPlayMovie}>
//                 Play Movie
//             </Button>
//             <Button onClick={onUploadImage}>
//                 Upload Image
//             </Button>
//         </>
//     );
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// export function Toolbar(){
//     return(
//         <div className="Toolbar" onClick={() => {
//             alert('You clicked on the toolbar!');
//         }}>
//             <button onClick={() => alert('Playing!')}>
//                 Play Movie
//             </button>
//             <button onClick={() => alert('Upload!')}>
//                 Upload Movie
//             </button>
//         </div>
//     )
// }

function Button({ onClick, children}){
    return(
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export function Toolbar(){
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={() => alert('Playing!')}>
                 Play Movie
            </Button>
            <Button onClick={() => alert('Upload!')}>
                 Upload Movie
             </Button>        
        </div>
    );
}

export function Signup(){
    return(
        <form onSubmit={ e => {
            e.preventDefault();
            alert('Submitting!');
            }}>
            <input />
            <button>Send</button>
        </form>
    );
}

export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false)

    function handleNextClick() {
        setIndex(index + 1);
    }
    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

// const root = createRoot(document.getElementById('root'))
// root.render(<Gallery2 />)

function useTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return time; // Retorna o valor do tempo para ser usado
}

export function App2() {
    const time = useTime();
    return (
        <Clock time={time.toLocaleTimeString()} />
    );
}

export function Form(){
    const [to, setTo] = useState('Maria');
    const [message, setMessage] = useState('Hello');
    
    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select 
                value={to}
                onChange={e => setTo(e.target.value)}>
                <option value="Maria">Maria</option>
                <option value="Isa">Isa</option>
                </select>
            </label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                />
                <button type="submit"> Send</button> 
        </form>
    )
}
function sendMessage(message){

}

export function Counter(){
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick ={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                // setNumber(number + 5);
                // setTimeout(() => {
                //     alert(number);
                // },3000)
            }}>+3</button>
        </>
    );
}

export function MovingDot(){
    const [position,setPosition] = useState({
        x: 0,
        y: 0
    });
    return(
        <div
            onPointerMove={ e =>{
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
        }}
        style={{
            position: 'relative',
            width: '100vh',
            heigth: '100vh',
        }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate{$position.x}px, ${position.y}`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
            </div>
    );
}

export function Form2(){
    const[person, setPerson] = useState({
        firstName: 'Barbara',
        lastName:'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e){
        person.firstName = e.target.value;
    }

    function handleLastNameChange(e){
        person.lastName = e.target.value;
    }

    function handleEmailChange(e){
        person.email = e.target.value;
    }

    return(
        <>
            <label>
                First name:
                <input value={person.firstName}
                onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input value={person.lastName}
                onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input value={person.email}
                onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                {person.email}
            </p>
        </>
    )
}


export function Form3() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/SglAgOm.jpg',
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (
        <>
            <label>Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}

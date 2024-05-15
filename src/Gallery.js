import React from 'react';
import ReactDOM from 'react-dom';

<article>
    <h1>My first Component</h1>
    <ol>
        <li>Compnents: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
    </ol>
</article>

export function Profile(){
    return (
        <>
        <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        width={100}
        height={100}
        />
        <br/> 
        <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
        width={100}
        height={100}
        />
        </>
    );
}


export function ProfileTWO(){
    return (
        <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
        />
    );
}

export default function Gallery(){
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            {/* <Profile />
            <Profile /> */}
        
        </section>
    );
}

export function TodoList(){
    return (
        <>
        <h1>Hedy Lamarr's Todos</h1>
        <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum tecnology</li>
        </ul>
        </>
    );
}


/*export function Avatar(){
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const descricao = "Gregorio Y. Zara";
    const name = "Gregorio Y. Zara";
	return(
    <>
    <h1>{name}'s To do List</h1>
    <img
	className="avatar"
	src={avatar}
	alt={descricao}
	/>
    </>
	);
}*/

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

const person = {
	name: 'Gregorio Y.Zara',
	theme: {
		backgroundColor: 'black',
		color: 'pink'
	}
};

export function TodoListTWO(){
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    return (
        <>
        <h1>To do List for {formatDate(today)}</h1>
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
	    className="avatar"
	    src={avatar}
        />
		<ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
        </>
    );
}

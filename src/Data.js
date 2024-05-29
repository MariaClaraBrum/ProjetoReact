export const sculptureList = [
    {
        name: 'Homenaje a la Neurocirugía',
        artist: 'Marta Colvin Andrade',
        description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
        url: 'https://i.imgur.com/Mx7dA2Y.jpg',
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
    },
    {
        name: 'Floralis Genérica',
        artist: 'Eduardo Catalano',
        description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
        url: 'https://i.imgur.com/ZF6s192m.jpg',
        alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
    },
    {
        name: 'Eternal Presence',
        artist: 'John Woodrow Wilson',
        description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humanity. His massive (7ft. or 2,13m) bronze represent what he described as “a whole human being, symbolic of a sense of overall humanity.”',
        url: 'https://i.imgur.com/aTtVpES.jpg',
        alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
    },
    {
        name: 'Moai',
        artist: 'Unknown Artist',
        description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, who some believe represented deified ancestors.',
        url: 'https://i.imgur.com/RPN0SPv.jpg',
        alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
   },
{
    name: 'Blue Nana',
    artist: 'Niki de Saint Phalle',
    description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    url: 'https://i.imgur.com/Sd1AgUOm.jpg',
    alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
},
{
    name: 'Ultimate Form',
    artist: 'Barbara Hepworth',
    description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    url: 'https://i.imgur.com/2he6p0pN.jpg',
    alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
},
{
    name: 'Cavalier',
    artist: 'Lamidi Olonade Fakeye',
    description: 'Descended from four generations of woodcarvers, Fakeye\'s work blended traditional and contemporary Yoruba themes.',
    url: 'https://i.imgur.com/wIdGuZwm.jpg',
    alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
},
{
    name: 'Big Bellies',
    artist: 'Alina Szapocznikow',
    description: 'Szapocznikow is known for her sculptures of fragmented body as a metaphor for fragility and impermanence of the human body. This sculpture depicts two monumental bellies leaning against each other, each around five feet (1,5m) tall.',
    url: 'https://i.imgur.com/AlHTAdDm.jpg',
    alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
},
{
    name: 'Terracotta Army',
    artist: 'Unknown Artist',
    description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
    url: 'https://i.imgur.com/MHTPH6m.jpg',
    alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
},
{
    name: 'Lunar Landscape',
    artist: 'Louise Nevelson',
    description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and a fragment, nailing and gluing them into boxes that reflect the influence of Cubism\'s geometric abstraction of space and form.',
    url: 'https://i.imgur.com/n7h7f6N.jpg',
    alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}];

export function Gallery2(){
    return(
        <section>
            <h1>Inspiting Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    );
}

export function Image(){
    return(
        <img
            src="https://i.imgur.com/ZF6s192.jpg"
            alt="Floralis Genérica' by Eduardo Catalano"
            />
    );
}

export function Clock({ time }){
    return(
        <>
        <h1>{time}</h1>
        <input/>
        </>
    );
}

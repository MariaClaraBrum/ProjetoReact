import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Home';
import Atividade1 from './Atividade1';


export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atividade1' element={<Atividade1 />} />
        </Routes>
        </BrowserRouter>
    );
}

//         <Route path='/' element={<Atividade2 />} />
// import Atividade2 from './atividade2';
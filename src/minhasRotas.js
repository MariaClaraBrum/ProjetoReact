import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Home';
import Atividade1 from './Atividade1';
import Atividade2 from './Atividade2';
import Atividade3 from './Atividade3';
import Atividade4 from './Atividade4';
import Atividade5 from './Atividade5';

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atividade1' element={<Atividade1 />} />
        <Route path='/atividade2' element={<Atividade2 />} />
        <Route path='/atividade3' element={<Atividade3 />} />
        <Route path='/atividade4' element={<Atividade4 />} />
        <Route path='/atividade5' element={<Atividade5 />} />
        </Routes>
        </BrowserRouter>
    );
}

import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const atualizarHora = () => {
      let relogio = new Date();
      relogio.setTime(relogio.getTime() - 3 * 60 * 60 * 1000);
      let horaAtual = relogio.toISOString().substring(11, 19);
      setHora(horaAtual);
    };

    const intervalID = setInterval(atualizarHora, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h4>Hora atual:</h4>
      <p>{hora}</p>
      <h5>Maria Clara Brum</h5>
    </div>
    
  );
}

export default Relogio;

import React, { useState } from 'react';
import './App.css';
import './cssAtv.css'; // Importando o arquivo CSS aqui

function ContadorDePessoas() {
  const [totalHomens, setTotalHomens] = useState(0);
  const [totalMulheres, setTotalMulheres] = useState(0);

  const addHomem = () => {
    setTotalHomens(totalHomens + 1);
  };

  const removeHomem = () => {
    if (totalHomens > 0) {
      setTotalHomens(totalHomens - 1);
    }
  };

  const addMulher = () => {
    setTotalMulheres(totalMulheres + 1);
  };

  const removeMulher = () => {
    if (totalMulheres > 0) {
      setTotalMulheres(totalMulheres - 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px', boxSizing: 'border-box' }}>
        <h1 style={{ flexGrow: 1, textAlign: 'center', margin: 0 }}>TOTAL</h1>
        <div style={{ fontSize: '24px', height: '40px' }}>Total:  {totalMulheres + totalHomens}</div>
        <img src={require('./recarregar.png')} style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => { setTotalMulheres(0); setTotalHomens(0); }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>MULHER</h2>
          <img src={require('./mulher.png')} style={{ width: '200px', height: '200px' }} />
          <div style={{ fontSize: '24px', height: '40px' }}>Mulheres: {totalMulheres}</div>
          <div style={{ display: 'flex' }}>
            <img src={require('./adicao.png')} style={{ width: '50px', height: '50px', margin: '5px', cursor: 'pointer' }} onClick={() => addMulher(true)} />
            <img src={require('./remove.png')}  style={{ width: '50px', height: '50px', margin: '5px', cursor: 'pointer' }} onClick={() => removeMulher(true)} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>HOMEM</h2>
          <img src={require('./homem.png')} style={{ width: '200px', height: '200px' }} />
          <div style={{ fontSize: '24px', height: '40px' }}>Homens: {totalHomens}</div>
          <div style={{ display: 'flex' }}>
            <img src={require('./adicao.png')} style={{ width: '50px', height: '50px', margin: '5px', cursor: 'pointer' }} onClick={() => addHomem(false)} />
            <img src={require('./remove.png')} style={{ width: '50px', height: '50px', margin: '5px', cursor: 'pointer' }} onClick={() => removeHomem(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContadorDePessoas;

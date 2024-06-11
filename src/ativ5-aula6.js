import React, { useState } from 'react';
import './ativ5-aula6.css';

export default function App() {
  // State for the counter
  const [value, setValue] = useState(0);
  // State for the input text
  const [inputValue, setInputValue] = useState("");

  // Functions to handle counter operations
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const multiply = () => setValue(value * 2);
  const divide = () => setValue(value / 2);
  const square = () => setValue(value ** 2);
  const cube = () => setValue(value ** 3);
  const reset = () => setValue(0);

  // Function to handle text input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to count characters
  const countCharacters = (text) => {
    const length = text.length;
    const alphabets = (text.match(/[a-zA-Z]/g) || []).length;
    const numbers = (text.match(/[0-9]/g) || []).length;
    const symbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
    const spaces = (text.match(/\s/g) || []).length;
    return { length, alphabets, numbers, symbols, spaces };
  };

  const counts = countCharacters(inputValue);

  return (
    <div className="App">
      <h1>Dinâmica - REGEX</h1>
      <h2>Mult Functional Counters</h2>
      <p>Value: {value}</p>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={square}>x²</button>
        <button onClick={cube}>x³</button>
        <button onClick={reset}>0</button>
      </div>
      <h2>Character Counter</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      <p>Text Length: {counts.length}  Alphabets: {counts.alphabets}  Numbers: {counts.numbers}  Symbols: {counts.symbols}  Spaces: {counts.spaces}</p>
    </div>
  );
}

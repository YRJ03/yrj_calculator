import { useState } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState('');

  const [num2, setNum2] = useState('');

  const [result, setResult] = useState(0);

  const [selectedInput, setSelectedInput] = useState('num1');

  const Num1 = (v1) => {
    setNum1(Number(v1.target.value));
  };

  const Num2 = (v2) => {
    setNum2(Number(v2.target.value));
  };

  const handleNumberClick = (number) => {
    if (selectedInput === 'num1') {
      setNum1(prev => Number(`${prev}${number}`));
    } else {
      setNum2(prev => Number(`${prev}${number}`));
    }
  };

  const selectInput = (input) => {
    setSelectedInput(input);
  };

  const add = () => {
    setResult(num1 + num2);
  };

  const subtract = () => {
    setResult(num1 - num2);
  };

  const multiply = () => {
    setResult(num1 * num2);
  };

  const divide = () => {
    setResult(num1 / num2);
  };

  const reset = () => {
    setNum1('');
    setNum2('');
    setResult(0);
  };

  const deleteDigit = () => {
    if (selectedInput === 'num1') {
      setNum1(prev => Math.floor(prev / 10));
    } else {
      setNum2(prev => Math.floor(prev / 10));
    }
  };

  return (
    <div className="App">
      <div className="inputField">
        <input
          className="value1"
          onClick={() => selectInput('num1')}
          onChange={Num1}
          placeholder='0'
          value={num1}
          type="number"
        />

        <input
          className="value2"
          onClick={() => selectInput('num2')}
          onChange={Num2}
          placeholder='0'
          value={num2}
          type="number"
        />
      </div>

      <div className="resultContainer">
        <h3 className="result">{result}</h3>
      </div>

      <div className="numberButtons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className="numberButton"
          >
            {number}
          </button>
        ))}

        <button className="Delete" onClick={deleteDigit}>Del</button>

        <button className="Reset" onClick={reset}>Reset</button>
      </div>
      
      <div className="buttonField">
        <button className="Add" onClick={add}>+</button>

        <button className="Sub" onClick={subtract}>-</button>

        <button className="Mul" onClick={multiply}>x</button>

        <button className="Divi" onClick={divide}>/</button>
      </div>
    </div>
  );
}

export default App;

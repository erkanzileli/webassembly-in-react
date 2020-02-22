import React, { useState } from 'react';
import wasm from './wasm';

export default function App() {
  const [value, setValue] = useState(5);
  const [result, setResult] = useState();

  return (
    <div className="App">
      <p>
        The factorial of the
        <input value={value} onChange={evt => setValue(evt.target.value)} />
        is {result}
      </p>
      <button onClick={async () => setResult((await wasm).factorial(value))}>
        Calculate
      </button>
    </div>
  );
}

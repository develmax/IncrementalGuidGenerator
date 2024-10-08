import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const [guids, setGuids] = useState([]);
  const counterRef = useRef(0);

  const generateIncrementalGuid = () => {
    const timestamp = Date.now().toString(16);
    const randomPart = Math.random().toString(16).slice(2, 10);
    const incrementalPart = (counterRef.current++).toString(16).padStart(3, '0');
    return `${timestamp}${incrementalPart}-${randomPart.slice(0, 4)}-${randomPart.slice(4, 8)}-${randomPart.slice(0, 4)}-${randomPart.slice(4, 8)}`;
  };

  const handleGenerateGuid = () => {
    const newGuid = generateIncrementalGuid();
    setGuids(prevGuids => [...prevGuids, newGuid]);
  };

  return (
    <div className="App">
      <h1>Incremental GUID Generator</h1>
      <button onClick={handleGenerateGuid}>Generate GUID</button>
      <ul>
        {guids.map((guid, index) => (
          <li key={index}>{guid}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
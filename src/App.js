import './App.css';
import { useRef, useState } from 'react';
import Transverse from './components/Transverse';
import Coronal from './components/Coronal';
import Sagittal from './components/Sagittal';

const Planes = () =>{
  const [position, setPosition] = useState({ x:100, y:100, z:100 })
  return (
    <div>
      <h2>Transverse</h2>
      <div>
        <Transverse position = {position} setPosition = {setPosition}></Transverse> 
      </div>
      <h2>Coronal</h2>
      <div>
        <Coronal position = {position} setPosition = {setPosition}></Coronal>
      </div>
      <h2>Saggital</h2>
      <div>
        <Sagittal position = {position} setPosition = {setPosition}></Sagittal>
      </div>
      <div>
      ({position.x}, {position.y}, {position.z})
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Planes></Planes>

      </header>
    </div>
  );
}

export default App;

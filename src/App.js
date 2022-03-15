import './App.css';
import { useRef, useState } from 'react';
import Transverse from './components/Transverse';
import Coronal from './components/Coronal';
import Sagittal from './components/Sagittal';

const Planes = () =>{
  const [position, setPosition] = useState({ x:100, y:100, z:100 })
  return (
    <div className = 'wrapper'>
      <h2>Transverse</h2>
      <h2>Coronal</h2>
      <h2 >Saggital</h2>
      <div>
        <Transverse position = {position} setPosition = {setPosition}></Transverse> 
      </div>
      <div>
        <Coronal position = {position} setPosition = {setPosition}></Coronal>
      </div>
      <div>
        <Sagittal position = {position} setPosition = {setPosition}></Sagittal>
      </div>
      <div className='box1'>
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

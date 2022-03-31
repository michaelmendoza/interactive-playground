import './App.css';
import { useRef, useState } from 'react';
import Transverse from './components/Transverse';
import Coronal from './components/Coronal';
import Sagittal from './components/Sagittal';

const Planes = () =>{
  const [picturesize, setPicsize] = useState({  x:100, y:200, z:300 })
  const [position, setPosition] = useState({ x:picturesize.x/2, y:picturesize.y/2, z:picturesize.z/2 })
  return (
    <div className = 'wrapper'>
      <h2>Transverse</h2>
      <h2>Coronal</h2>
      <h2 >Saggital</h2>
      <div>
        <Transverse position = {position} setPosition = {setPosition} picturesize = {picturesize}></Transverse> 
      </div>
      <div>
        <Coronal position = {position} setPosition = {setPosition} picturesize = {picturesize}></Coronal>
      </div>
      <div>
        <Sagittal position = {position} setPosition = {setPosition} picturesize = {picturesize}></Sagittal>
      </div>
      <div className='box1'>
      ({(position.x/picturesize.x).toFixed(2)}, {(position.y/picturesize.y).toFixed(2)}, {(position.z/picturesize.z).toFixed(2)})
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

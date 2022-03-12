import { useRef, useState } from 'react';
import './viewer3d.scss';

const Viewer3D = () => {
  const viewerRef = useRef(null);

  const [canDrag, setCanDrag] = useState(false);
  const [position, setPosition] = useState({ x:200, y:0 })
  const [color, setColor] = useState('#EEEEEE')
  const [isDark, setIsDark] = useState(false)

  const handleClick = () => {
    setIsDark(!isDark)

    if(!isDark)
      setColor('#222222')
    else
      setColor('#EEEEEE')
  }

  const drawImg = () => {
    
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    setCanDrag(true)
  }

  const handleMouseUp = (e) => {
    e.preventDefault();
    setCanDrag(false)
  }

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setCanDrag(false)
  }

  const handleMouseMove = (e) => {
    e.preventDefault();
    if(!canDrag) return;

    var rect = viewerRef.current.getBoundingClientRect();

    let x = Math.round(e.pageX - rect.left);
    let y = Math.round(e.pageY - rect.top);

    x = x < 0 ? 0 : x
    x = x > viewerRef.current.clientWidth ? viewerRef.current.clientWidth : x
    setPosition({ x, y })
    
    const factor = Math.floor((position.x - rect.left) * 255 / e.target.clientWidth);
    const hexFactor = factor < 16 ? '0' + factor.toString(16) : factor.toString(16)
    const hexColor = '#EEEE' + hexFactor
    
    setColor(hexColor);
  
    const maxSlice = 200;
    const slice = factor * maxSlice;
    drawImg(slice)
  }

  return (
    <div className='viewer-3d'>
        <div>
          ({ position.x }, { position.y })
        </div>

        <div className='viewer-continer' style={{ backgroundColor: color}} ref={viewerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className='drag-handle-viewable' style={{ left:position.x }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}> 
            <div className='drag-handle-dragable'></div>
          </div>  
        </div>
      
    </div>
  );
}

export default Viewer3D;

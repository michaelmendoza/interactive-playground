import { useRef, useState } from 'react';
import './viewer3d.scss';


const Coronal = ({position, setPosition, picturesize}) => {
  const viewerRef = useRef(null);

  const [canDrag, setCanDrag] = useState(false);
  
  const [color, setColor] = useState('#EEEEEE')
  const [isDark, setIsDark] = useState(false)
  const [pictureWidth, setwidth] = useState(picturesize.y) //hard code here
  

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

    let x = position.x
    let y = Math.round(rect.right - e.pageX );
    let z = Math.round(e.pageY - rect.top );

    z = z < 0 ? 0 : z
    z = z > viewerRef.current.clientHeight ? viewerRef.current.clientHeight : z
    y = y < 0 ? 0 : y
    y = y > viewerRef.current.clientWidth ? viewerRef.current.clientWidth : y
    setPosition({ x, y, z })
   

    
    // const factor = Math.floor((position.x - rect.left) * 255 / e.target.clientWidth);
    // const hexFactor = factor < 16 ? '0' + factor.toString(16) : factor.toString(16)
    // const hexColor = '#EEEE' + hexFactor
    
    // setColor(hexColor);
  
    // const maxSlice = 200;
    // const slice = factor * maxSlice;
    // drawImg(slice)
  }

  return (

    <div className='viewer-3d'>

        <div className='viewer-continer' style={{ width: picturesize.y, height: picturesize.z}} ref={viewerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className='drag-handle-viewable-h-yellow' style={{ top:position.z, width: picturesize.y}} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}> 
            <div className='drag-handle-dragable-h'></div>
          </div>  
          <div className='drag-handle-viewable-v-green' style={{ left:pictureWidth-position.y }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}> 
            <div className='drag-handle-dragable-v'></div>
          </div>  
        </div>
      
    </div>
  );
}



export default Coronal;

import {ColorContext} from '../ColorContext';
import {useContext} from 'react';

export default function ColorPicker() {
    const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
    const {setColor} = useContext(ColorContext);
  return (
    <div>
        <h1>Choose a color</h1>
        {colors.map((color) => (
            <button key={color} onClick={()=>setColor(color)} style={{backgroundColor: color}}/>
        ))}
    </div>
  )
}
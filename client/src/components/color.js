import {useState} from 'react';

const ColorPicker = (props) => {

    const [color, setColor] = useState("")
    const [size, setSize] = useState(0)
    
    const submitHandler = (e) => {
        e.preventDefault();
        props.pickColor(color, size)
    }

    return(
        <div>
            <h2>Generate a Box!</h2>
            <form onSubmit={submitHandler}>
                <input 
                type="text"
                placeholder='Pick a color!' 
                value={color} 
                onChange ={(e) => {setColor(e.target.value)}} 
                />
                <input 
                type="number"
                placeholder='Pick a size!' 
                value={size} 
                onChange ={(e) => {setSize(e.target.value)}} 
                />
                <input type="submit" value="Generate" />
            </form>
        </div>
    )
}

export default ColorPicker;
import {useState} from 'react';

const ColorPicker = (props) => {

    const [color, setColor] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        props.pickColor(color)
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
                <input type="submit" value="Generate" />
            </form>
        </div>
    )
}

export default ColorPicker;
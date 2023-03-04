import { useState } from 'react';

const ColorPicker = (props) => {

    const { boxList, setBoxList } = props
    const [box, setBox] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setBoxList([box, ...boxList])
        console.log(boxList)
    }

    return (
        <div>
            <h2>Generate a Box!</h2>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder='Pick a color!'
                    value={box.color}
                    onChange={(e) => setBox({ ...box, "color": e.target.value })}
                />
                <input
                    type="number"
                    placeholder='Pick a size!'
                    value={box.size}
                    onChange={(e) => setBox({ ...box, "size": e.target.value })}
                />
                <input type="submit" value="Generate" />
            </form>
        </div>
    )
}

export default ColorPicker;
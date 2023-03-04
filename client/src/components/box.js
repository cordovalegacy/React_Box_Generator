const Box = (props) => {

    const boxColor = props.color
    const newBoxes = [...boxColor]

    const generateBoxes = newBoxes.map((newBox, index) => {
        <p key={index}>{newBox}</p>
    })

    console.log(generateBoxes)

    return (
        <div>
            <h3>{boxColor}</h3>

        </div>
    )
}

export default Box;

const Box = (props) => {

    const mapBoxesColor = props.boxMapColor
    const mapBoxesSize = props.boxMapSize
    console.log(props)
    const boxes = [{mapBoxesColor, mapBoxesSize}]
    
    return (
        <div>
            <div className="box-wrapper">
                {console.log(props.boxMapColor)}
                {boxes.map((box, index) => <div style={{backgroundColor: box.mapBoxesColor, width: box.mapBoxesSize + "px", height: box.mapBoxesSize + "px"}} key={index}></div>)}
            </div>
        </div>
    )
}

export default Box;
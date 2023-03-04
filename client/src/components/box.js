
const Box = (props) => {

    const { boxList } = props

    return (
            <div className="box-wrapper">
                {boxList.map((box, index) => {
                    return (
                        <div
                            style=
                            {{
                                backgroundColor: box.color,
                                width: box.size + "px",
                                height: box.size + "px"
                            }}
                            key={index}>
                        </div>
                    )
                })}
            </div>
    )
}

export default Box;
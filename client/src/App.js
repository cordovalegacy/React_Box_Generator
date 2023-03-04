import ColorPicker from './components/color';
import Box from './components/box';
import {useState} from 'react';
import './App.css';

function App() {

  // BUCKET THAT WE ARE SENDING DOWN INTO THE WELLS (CHILD COMPONENTS)
  const [boxMapColor, setBoxMapColor] = useState([])
  const [boxMapSize, setBoxMapSize] = useState([])

  // THIS IS THE ROPE THAT WILL HOLD THE BUCKET, AND WILL ALLOW US TO 'LIFT' IT BACK UP WITH CONTENTS
  const colorOfBox = (newBoxColor, newBoxSize) => {
  // HERE WE ARE MERGING THE EMPTY ARRAY WITH THE COLOR VALUES ONCE THE BUCKET IS LIFTED BACK UP
    setBoxMapColor([...boxMapColor , newBoxColor])
    setBoxMapSize([...boxMapSize , newBoxSize])
  }

  return (
    <div className="App">
      <ColorPicker pickColor={colorOfBox}  />
      <Box boxMapColor={boxMapColor} boxMapSize={boxMapSize} />
    </div>
  );
}

export default App;

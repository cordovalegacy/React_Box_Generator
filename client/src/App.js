import ColorPicker from './components/color';
import Box from './components/box';
import {useState} from 'react';
import './App.css';

function App() {

  const [boxColor, setBoxColor] = useState("")

  const colorOfBox = (newBoxColor) => {
    setBoxColor(newBoxColor)
  }

  return (
    <div className="App">
      <ColorPicker pickColor={colorOfBox}  />
      <Box color={boxColor} />
    </div>
  );
}

export default App;

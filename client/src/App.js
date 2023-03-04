import ColorPicker from './components/color';
import Box from './components/box';
import { useState } from 'react';
import './App.css';

function App() {

  const [boxList, setBoxList] = useState([])

  return (
    <div className="App">
      <ColorPicker boxList={boxList} setBoxList={setBoxList} />
      <Box boxList={boxList} />
    </div>
  );
}

export default App;

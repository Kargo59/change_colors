
import SetColorBar from './SetColorBar';
import ColorDisplay from './ColorDisplay';
import { useState } from 'react';


function App() {

  const [currentColor, setCurrentColor] = useState('')


  return <main>
           <ColorDisplay 
              currentColor = {currentColor}
           />
           <SetColorBar 
              currentColor = {currentColor}
              setCurrentColor = {setCurrentColor}
           /> 
  </main>
}

export default App;

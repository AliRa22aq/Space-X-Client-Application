import React from 'react';
import './App.css';

import MissonContainer from './components/Mission/index'
import MissonInfoContainer from './components/MissionInfo';


function App() {
  
  const [id, setId] = React.useState<number>(106);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div style={{display: "flex"}}>
      <MissonContainer handleIdChange={handleIdChange} />
      <MissonInfoContainer id={id}/>

    </div>
  );
}

export default App;

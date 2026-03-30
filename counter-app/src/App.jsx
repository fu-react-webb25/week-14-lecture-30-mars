import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);

  const decrease = () => {
    setValue(prev => prev - 1);
  }
  
  const increase = () => {
    setValue(prev => prev + 1);
  }

  return (
    <div className="app">
      <button onClick={decrease}>Decrease</button>
      <p>{value}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default App;

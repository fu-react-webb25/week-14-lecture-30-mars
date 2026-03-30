import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);

  const decrease = () => {
    setValue(value - 1);
    setValue(value - 1);
  }
  
  const increase = () => {
    setValue(value + 1);
    setValue(value + 1);
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

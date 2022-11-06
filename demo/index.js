import React from 'react';
import { createRoot } from 'react-dom/client';

import Component from './component';
import MultipleInputs from './multiple-inputs';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <Component />
      <br />
      <br />
      <MultipleInputs />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;

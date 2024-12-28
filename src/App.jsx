import React from 'react';
import EternalMode from './components/EternalMode.jsx';  // Import the EternalMode component

function App() {
  return (
    <div style={{ textAlign: 'center', color: 'lime', marginTop: '50px' }}>
      <h1>Welcome to Generative Eternal</h1>
      <p>Your AI-driven experience starts here.</p>
      <EternalMode />  {/* Add the EternalMode component here */}
    </div>
  );
}

export default App;
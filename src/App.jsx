import React from 'react';
import EternalMode from './components/EternalMode.jsx';
import MarioGame from './components/MarioGame.jsx';

function App() {
  return (
    <div style={{ textAlign: 'center', color: 'lime', marginTop: '50px' }}>
      <h1>Welcome to Generative Eternal</h1>
      <p>Your AI-driven experience starts here.</p>
      <EternalMode />
      <h2>Mini Mario</h2>
      <MarioGame />
    </div>
  );
}

export default App;
import { useState } from 'react'
import './App.css'

  function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to RPG!</h1>
      <p>Recommeds Personalized Games! </p>
      <button onClick={() => alert("Hello!")}>Click Me</button>
    </div>
  );
}
export default App

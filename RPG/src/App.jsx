import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Welcome to RPG</h1>
        <p>Recommends Personalized Games!</p>
        <button onClick={() => navigate('/search')}>
          Begin Searching for Games!
        </button>
        <button onClick={() => navigate('/login')}>
          Log In
        </button>
      </header>
    </div>
  );
}
export default App

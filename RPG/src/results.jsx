import { useNavigate } from 'react-router-dom';
function results() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Results of your Search</h1>
        <button onClick={() => navigate('/')}>
          Back to Main Page
        </button>
        <button onClick={() => navigate('/search')}>
          Search Again
        </button>
      </header>
    </div>
  );
}
export default results
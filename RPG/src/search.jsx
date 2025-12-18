import './search.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Search() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async(e) => {
        e.preventDefault(); //OH GOD THE PAGE STOPPED RELOADING ITSELF
        try {
            const response = await fetch(`/api/search?q=${searchTerm}`); //routes/search.js
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };


    return(
        //changed to include form properly
        //below contains search bar/button and title screen button, and display
    <div> 
        <form onSubmit={handleSearch}> 
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games..."
            />
        <button type="submit">Search</button>
        </form>

        <button onClick={() => navigate("/")}>Back to Main Page</button>

      <div>
        {searchResults.length === 0 && (
          <p>No results found</p>
        )}

        {searchResults.map((item) => (
          <div key={item.game_id}>
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
          </div>
        ))}
      </div>
    </div>

    );
}
export default Search
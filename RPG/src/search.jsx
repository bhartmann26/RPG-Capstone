import './search.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Search() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async() => {
        try {
            const response = await fetch(`/api/search?q=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
    return(
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={() => navigate('/')}>
            Back to Main Page
            </button>
            <div>
                {searchResults.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Search
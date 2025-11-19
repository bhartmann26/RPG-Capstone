import './search.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Search() {
    const navigate = useNavigate()
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() === "") return;
        navigate('/results?q=${encodeURIComponent(query)}');
    }
    return(
        <div>
            <input className="searchbar"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
                Search
            </button>
            <button onClick={() => navigate('/')}>
            Go Back!
            </button>
        </div>
    )
    
}
export default Search
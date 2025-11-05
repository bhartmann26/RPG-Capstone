import { useNavigate } from "react-router-dom"

function Search() {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={() => navigate('/search')}>
            Go Back!
            </button>
        </div>
    )
    
}
export default Search
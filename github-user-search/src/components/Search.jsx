import { useState } from "react";
import { fetchUserData } from "../services/githubservice";

function Search () {
    const [username, setUsername] = useState(""); //store input value
    const [userData, setUserData] = useState(null); //store fetched data
    const [loading, setLoading] = useState(false); //Loading state
    const [error, setError] = useState(""); //error message

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page reload
        setLoading(true);
        setError("");
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div style={{textAlign: "center", marginTop:"20px"}}>
            {/*Search Form*/}
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                style={{padding:"8px", width:"250px"}}
                />
                <button type="submit" style={{padding:"8px 12px", marginLeft: "5px"}}>
                    Search
                </button>
            </form>

            {/*Conditional Messages*/}
            {loading && <p>Loading...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            {userData && (
                <div style={{marginTop:"20px"}}>
                    <img src={userData.avatar_url} alt="avatar" width="100" style={{borderRadius: "50%"}} />
                    <h3>{userData.name || userData.login}</h3>
                    <a href={userData.html_url} target="_blank" rel="noreferrer">
                        View profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search;


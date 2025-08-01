import { useState } from "react";
import { fetchUserData,advancedSearchUsers } from "../services/githubservice";

function Search () {
    const [username, setUsername] = useState(""); //store input value
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [results, setResults] = useState([]);
    const [userData, setUserData] = useState(null); //store fetched data
    const [loading, setLoading] = useState(false); //Loading state
    const [error, setError] = useState(""); //error message

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page reload
        setLoading(true);
        setError("");
        setUserData(null);
        setResults([]);

        try {
            //If only username is provided
            if (username && !location && !minRepos) {
                const data = await fetchUserData(username);
                setUserData(data);//single user result
            }
            //If any extra fields are provided => Advanced Search
            else {
                const data = await advancedSearchUsers(username, location, minRepos);
                setResults(data.items);
            }
        } catch {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-x1 shadow-lg">

            {/* Search Form*/}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                type ="text"
                placeholder="Username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                className="w-full border p-2 rounded"
                />
                <input
                type="text"               
                placeholder="Location (optional)"
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                className="w-full border p-2 rounded"
                />
                <input
                type="text"
                placeholder="Min Repositories (optional)"
                value={minRepos}
                onChange={(e)=> setMinRepos(e.target.value)}
                className="w-full border p-2 rounded"
                />
                <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>
            {/* Status Messages*/}
            {loading && <p className="text-center mt-4"> Loading...</p>}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}

            {/*Simple Search Result*/}
            {userData && (
                <div className="mt-t text-center">
                    <img 
                    src={userData.avatar_url}
                    alt={userData.login}
                    className="w-24 h-24 mx-auto rounded-full"
                    />
                    <h2 className="font-semibold text-lg mt-2">
                        {userData.name || userData.login}
                    </h2>
                    <a 
                    href={userData.html_url}
                    target="_blank"
                    rel="norefferer"
                    className="text-blue-500"
                    >
                        View Profile
                    </a>
                </div>
            )}

            {/*Advanced Search Results*/}
            {results.length > 0 && (
                <div className="mt-6 space-y-4">
                    {results.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center bg-gray-100 p-3 rounded-lg"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="font-semibold">{user.login}</h2>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;

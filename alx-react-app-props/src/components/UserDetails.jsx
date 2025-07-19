import { useContext } from "react";
import userContext from "./UserContext";

function userDetails() {

const UserData = useContext(useContext);
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
};

export default userDetails;
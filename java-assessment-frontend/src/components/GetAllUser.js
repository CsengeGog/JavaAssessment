import { useState, setUsers } from "react";
import User from "./User";

const GetAllUser = () => {
    const [users, setUsers] = useState([]);

    const getUserHandler = (event) => {
        event.preventDefault();
        console.log('All Users');

    }

    return(
        <div>
            
            <div className="user-container">
                {users.map((onlyUser) =>
                    (<User user ={onlyUser}></User>)
                )}

            </div>
            <div>
            <button onClick={getUserHandler}>Get Users</button>
            </div>
        </div>
    );
}
export default GetAllUser;
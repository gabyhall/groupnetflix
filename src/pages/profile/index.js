import { useState } from 'react';
import { updateUser } from "../../utils";
import { deleteUser } from "../../utils";
import { PageContainer } from '../../styledComponents';



export const Profile = ({user, setUser}) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass,setPassword] = useState();

    return (
        <PageContainer>
           
            <div className ="profileContainer">
            <h1>User Details</h1>
                <form onSubmit={(e) => updateUser(e, email, username, pass, setUser, user)}>
                    <label>
                        <p>Change username:</p>
                        <input type="text" name="username" onChange = {(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <p>Change email:</p>
                        <input type="text" name="email" onChange = {(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Change password:</p>
                        <input type="text" name="password" onChange = {(e) => setPassword(e.target.value)} />
                    </label>
                        <button type="submit" >Update</button>
                </form>

                <p>Delete User Profile</p>
                <button type="submit" onClick = {() => {deleteUser(setUser, user)}}>Delete</button>
                </div>
        </PageContainer>
    )
};

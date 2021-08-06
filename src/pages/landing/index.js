import { PageContainer } from '../../styledComponents';
import React, { useState, Redirect } from 'react';
import styled from 'styled-components';
import { fetchUsers } from '../../utils';
import './landing.css'
import { Nav } from '../../components/navbar'

export const Landing = ({ user, setUser }) => {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();

    return(
        <PageContainer>
           <Nav></Nav>
            <div className = "signIn">
                <div className = "Container">
            <LogForm onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}>
                {newUser && <LogInput onChange={(e) => setEmail(e.target.value)} placeholder='email'/>}
                <LogInput onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <LogInput onChange={(e) => setPass(e.target.value)} placeholder='password'/>
                <div className = "loginButton">
                <LogButton className = "button" type='submit'>{newUser ? 'Sign Up' : 'Log In'}</LogButton>
                </div>
            </LogForm>
            <div className = "loginButton">
            <LogButton type='button' className = "button" onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</LogButton>
            {user && <Redirect to='/home'/>}
            </div>
            </div>
            </div>
        </PageContainer>

    )
}

const LogInput = styled.input`
    width: 350px;
    padding: 5px;
    margin: 15px;
    align-content: center;
`

const LogForm = styled.form`
    width: 35vw;
`

const LogButton = styled.button`
    width: 350px;
`
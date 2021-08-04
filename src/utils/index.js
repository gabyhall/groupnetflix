export const fetchUsers = async (e, email, username, pass, setUser, user) => {
    e.preventDefault();
    try {
        let response;
        if (email){
        response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            email: email,
            password: pass
        }) 
    })
    } else {
        response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`, )
    } 
    const data = await response.json();
    console.log(data); 
    setUser(data.user.username) //might be different depending on format of my database //
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (e, email, username, pass, setUser, user) => {
    e.preventDefault();
    try {
        let response;
        if (username) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: pass,
                    currentUser: user
                })
            })
    }
    const data = await response.json();
    setUser(data.user.username)
    } catch (error) {
        console.log(error);
    }
};


export const deleteUser = async (user, setUser) => {
    try {
        let response;
        if (user) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users/${user}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                username: user,
            })
    }
    await response.json();
    setUser()
    } catch (error) {
        console.log(error);
    }
};
   


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
        }) //is working //
    })
    } else {
        response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`)
    } 
    const data = await response.json();
    console.log(data); //is working //
    setUser(data.username) //might be different depending on format of my database //
    console.log(user); //is undefined //
    } catch (error) {
        console.log(error)
    }
}
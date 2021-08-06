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
    localStorage.setItem("MyToken", data.token)
    const info = setUser(data.username) //might be different depending on format of my database //
    console.log(info); //is undefined //
    } catch (error) {
        console.log(error)
    }
} 
export const authUser = async (setUser) => {
    if (localStorage.MyToken){

        try {
            const response = await fetch (`${process.env.REACT_APP_REST_API}users`,{
                method: 'GET',
                headers: {"Authorization": `Bearer ${localStorage.getItem("MYToken")}`}
            })
            const data = await response.json()
            setUser(data.username)
        } catch (error) {
            console.log(error)
        }
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
            username: username,
            email: email,
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

export const addToList = async (item, setAddFilm) => {
    try {
        let response;
        response = await fetch(`${process.env.REACT_APP_REST_API}movies`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: "username",           // how to pass user to here? //
                title: item.title,          
                release: item.release_date, 
                imageURL: item.poster_path, 
                filmID: item.id,            
            }) 
        })
        const data = await response.json();
        console.log(data);
        setAddFilm(data);
    } catch (error) {
        console.log(error)
    }
}
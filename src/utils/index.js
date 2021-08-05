

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
    setUser(data.user.username)
    } catch (error) {
        console.log(error)
    }
}



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
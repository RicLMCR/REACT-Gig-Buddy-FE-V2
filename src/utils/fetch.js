//user sign up
export const createUser = async (username, email, password)=>{
    console.log("fetch createUser", username, email, password)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await response.json();
        console.log( "user data",data)
    } catch (error) {
        console.log(error);
    }
}

//user login
export const logInUser = async (username, password)=>{
    console.log("fetch logInUser", username, password)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await response.json();
        console.log( "user data",data)
    } catch (error) {
        console.log(error);
    }
}
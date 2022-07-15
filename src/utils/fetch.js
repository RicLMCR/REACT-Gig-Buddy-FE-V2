//dont forget async
export const createUser = (username, email, password)=>{
    try {
        console.log("fetch createUser", username, email, password)
    } catch (error) {
        console.log(error);
    }
}

//dont forget async
export const logInUser = (username, password)=>{
    try {
        console.log("fetch logInUser", username, password)
    } catch (error) {
        console.log(error);
    }
}
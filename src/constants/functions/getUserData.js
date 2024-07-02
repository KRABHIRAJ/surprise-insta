import { baseUrl } from "../api";


const getUserData = async (instaId) => {
    try{
        const data = await fetch(`${baseUrl}${instaId}`)
        const response = await data.json();
        return response;
    }catch(err){
        console.warn('Error while getting user data: ', err)
    }
}

export default getUserData;
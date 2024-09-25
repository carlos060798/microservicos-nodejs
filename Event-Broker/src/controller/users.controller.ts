
import axios from "axios";



const  usersApi = axios.create({
    baseURL: 'http://localhost:3003/users'
});
export const getAllUsers = async () => {
    try {
        const { data } = await usersApi.get('/all');
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Could not find users',
            error
        }
    }
}

import axios from "axios" 

const productsApi= axios.create({
    baseURL: 'http://localhost:3002/products'

})
export const getAllProducts = async () => { 
    try {
        const { data } = await productsApi.get('/all');
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Could not find products',
            error
        }
    }

}
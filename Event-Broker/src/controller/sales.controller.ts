import axios from "axios";

const  salesApi = axios.create({
    baseURL: 'http://localhost:3004/sales'
});


interface Sales{
    uid: string;
    product_id: string;
    quantity: number;
}
export const getAllUsers = async () => {
    try {
        const { data } = await salesApi.get('/all');
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Could not find users',
            error
        }
    }
}

export const createSale = async (payload:Sales) => {
    try {
        const { data } = await salesApi.post('/create', {data:payload});
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Could not create sale',
            error
        }
    }
}
import {axiosInstanceWithToken} from './axiosInstance'


export const buyMilkOrCurd = async (milk, token) => {
    try {
        if(!token) {
            throw new Error('Token not found')
        }
        const response = await axiosInstanceWithToken(token).post('/milk/purchaseMilkOrCurd', milk)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}
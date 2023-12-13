import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://inventory-management-system-server-livid.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
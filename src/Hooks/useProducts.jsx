import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProducts = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const{data:products, isLoading,refetch}= useQuery({
        queryKey: ["products", user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/shopProduct/${user.email}`)
            return res.data
        }
        

    })
    return [products,isLoading,refetch]
};

export default useProducts;
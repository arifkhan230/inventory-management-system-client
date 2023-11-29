import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useManager = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isManager, isPending: isManagerLoading } = useQuery({
        queryKey: [user?.email, 'isManager'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/isManager/${user.email}`)
            return res?.data?.manager
        }
    })
    return [isManager, isManagerLoading]
};

export default useManager;


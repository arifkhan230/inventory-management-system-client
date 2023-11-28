import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const SalesSummery = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: sales = [] } = useQuery({
        queryKey: ['sales', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manager/salesProduct?email=${user.email}`)
            return res.data
        }
    })

    console.log(sales)

    const totalSales = sales.reduce((total, item) => total + item.sellingPrice, 0)
    const totalInvest = sales.reduce((total, item) => total + item.productionCost, 0)
    const profit = parseInt(totalSales - totalInvest)
    console.log(totalSales, totalInvest, profit);



    return (
        <div>
            <div className="flex gap-6 justify-around">
                <div className="bg-blue-400 p-10 text-center text-white">
                    <h2 className="text-2xl text-center">Total Sales</h2>
                    <p className="text-2xl font-bold">{sales?.length}</p>
                </div>
                <div className="bg-blue-400 p-10 text-center text-white">
                    <h2 className="text-3xl text-center">Total Invest</h2>
                    <p className="text-2xl font-bold">$ {totalInvest}</p>
                </div>
                <div className="bg-blue-400 p-10 text-center text-white">
                    <h2 className="text-3xl text-center">Total Profit</h2>
                    <p className="text-2xl font-bold">$ {profit}</p>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center">Sold Products</h2>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-200">
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Selling Date</th>
                                <th>Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map((item,idx) =>   <tr key={item._id}>
                                    <th>
                                        {idx +1}
                                    </th>
                                    <td>
                                        {item.productName}
                                    </td>
                                    <td>
                                        {item.soldDate}
                                    </td>
                                    <td>
                                       $ {item.sellingPrice - item.productionCost}
                                    </td>
                                </tr>)
                            }
                          
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesSummery;
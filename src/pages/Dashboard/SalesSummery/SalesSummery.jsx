import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Loading from "../../../Components/Loading/Loading";



const SalesSummery = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const [page, setPage] = useState(0);

    const { data:sales, isPending } = useQuery({
        queryKey: ['sales', user?.email,page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manager/salesProduct?email=${user.email}&page=${page}`)
            return res.data
        }
    })

    const {data:salesTotal} = useQuery({
        queryKey: ['salesData',user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/manager/salesData/${user.email}`)
            return res.data
        }
    })

    if(isPending){
        return <Loading></Loading>
    }


    // console.log(sales.length)
    const totalProduct = sales?.totalSales;
    console.log(totalProduct);

    const totalPages = Math.ceil(totalProduct / 5);
    console.log(totalPages);
    const pages = [...new Array(totalPages).fill(0)]
    console.log(pages);

    const totalSalesProduct = salesTotal?.reduce((total, item) => total + item.sellingPrice, 0)
    const totalInvest = salesTotal?.reduce((total, item) => total + item.productionCost, 0)
    const profit = parseInt(totalSalesProduct - totalInvest)
    // console.log(totalSales, totalInvest, profit);



    return (
        <div>
            <Helmet>
                <title>NexGen Inventory || Sales Summery</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-6 justify-around">
                <div className="bg-blue-400 flex-1  p-10 text-center text-white">
                    <h2 className="text-3xl text-center">Sales</h2>
                    <p className="text-2xl font-bold">{salesTotal?.length}</p>
                </div>
                <div className="bg-blue-400 flex-1  p-10 text-center text-white">
                    <h2 className="text-3xl text-center">Total Sales</h2>
                    <p className="text-2xl font-bold">$ {totalSalesProduct}</p>
                </div>
                <div className="bg-blue-400 p-10 flex-1 text-center text-white">
                    <h2 className="text-3xl text-center">Total Invest</h2>
                    <p className="text-2xl font-bold">$ {totalInvest}</p>
                </div>
                <div className="bg-blue-400 p-10 flex-1 text-center text-white">
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
                                sales?.result?.map((item, idx) => <tr key={item._id}>
                                    <th>
                                        {idx + 1}
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
            <div className="text-center my-10">

                {
                    pages?.map((item, index) => <button
                        className={` w-7 h-7 rounded-full mr-4 ${page == index ? "text-white bg-black" : "text-black"}`}
                        key={index}
                        onClick={() => setPage(index)}>{index + 1}</button>)
                }
            </div>
        </div>
    );
};

export default SalesSummery;
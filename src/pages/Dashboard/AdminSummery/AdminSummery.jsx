import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";


const AdminSummery = () => {
    const axiosSecure = useAxiosSecure();
    const [page,setPage] = useState(0)

    const { data: TotalProducts = [] } = useQuery({
        queryKey: ['totalProducts'],
        queryFn: () =>
            axiosSecure.get('/allProducts')
                .then(res => {
                    return res.data;
                })

    })


    const { data: TotalSales = [] } = useQuery({
        queryKey: ['totalSales'],
        queryFn: () =>
            axiosSecure.get('/allSales')
                .then(res => {
                    return res.data;
                })

    })


    const { data: {result = [], count=0} ={} } = useQuery({
        queryKey: ['allUsers',page],
        queryFn: () =>
            axiosSecure.get(`/users?page=${page}`)
                .then(res => {
                    return res.data;
                    
                })

    })


    const totalPages = Math.ceil(count / 5);
    console.log(totalPages);
    const pages = [...new Array(totalPages).fill(0)]
    console.log(pages);

    // console.log(TotalProducts);
    // console.log(TotalSales);
    // console.log(allUsers);


    // const itemPerPage = 1;
    // const numberOfPages = Math.ceil(allUsers.length / itemPerPage);
    // console.log(numberOfPages)
    // const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);


    // const totalSalesAmount = TotalSales.reduce((total, item) => total + item.sellingPrice, 0)

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Admin Summery </h2>


            <div className="flex gap-6 justify-around">
                <div className="bg-blue-400 p-10 text-center text-white">
                    <h2 className="text-2xl text-center">Total Income</h2>
                    <p className="text-2xl font-bold"></p>
                </div>
                <div className="bg-blue-400 p-10 text-center text-white">
                    <h2 className="text-3xl text-center">Total Product</h2>
                    <p className="text-2xl font-bold">{TotalProducts?.length}</p>
                </div>
                <div className="bg-blue-400 p-10 text-center text-white">
                    <h2 className="text-3xl text-center">Total Sales</h2>
                    <p className="text-2xl font-bold">{TotalSales?.length}</p>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center">System Users</h2>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-gray-200">
                            <tr>
                                <th>#</th>
                                <th> Name</th>
                                <th>Email</th>
                                <th>ShopName</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                result?.map((item, idx) => <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>
                                        {item?.email}
                                    </td>
                                    <td>
                                        {item?.shopName ? item.shopName : "No Shop"}
                                    </td>
                                    <td>
                                        {item?.role ? item.role : "user"}
                                    </td>
                                    <td>
                                        {!item?.role &&
                                            <button className="btn btn-primary">Send Promotional email</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center my-10">
                
               {
                pages.map((item,index)=> <button 
                className={` w-7 h-7 rounded-full mr-4 ${page == index ? "text-white bg-black" : "text-black"}`} 
                key={index} 
                onClick={()=>setPage(index)}>{index + 1}</button>)
               }
            </div>
        </div>
    );
};

export default AdminSummery;
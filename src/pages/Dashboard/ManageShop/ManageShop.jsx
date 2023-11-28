import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageShop = () => {
    const axiosSecure = useAxiosSecure()

    const { data: shops = [] } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await axiosSecure.get('/shops')
            return res.data
        }
    })

    console.log(shops)

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Manage Shops</h2>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>#</th>
                            <th>Shop Name</th>
                            <th>Shop Logo</th>
                            <th>Product Limit</th>
                            <th>Shop Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shops?.map((item, idx) => <tr key={item._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    {item.shopName}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.shopLogo} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                  {item.limit}
                                </td>
                                <td>
                                  {item.shopInfo}
                                </td>
                                <td>
                                  <button className="btn btn-primary">Send Notice</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageShop;
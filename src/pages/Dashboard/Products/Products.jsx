
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Products = () => {
    const [products, isLoading, refetch] = useProducts();
    const axiosSecure = useAxiosSecure()
    console.log(products)


    const handleDeleteProduct = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Delete this product",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/shopProduct/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    if (isLoading) {
        return <p>Loading.....</p>
    }

    return (
        <div>
            <div className="flex justify-between items-center my-10  border-b-2 border-t-2">
                <h2 className="text-3xl font-bold">Total {products?.length} Products</h2>
                <Link to="/dashboard/addProduct">
                    <button className="btn btn-primary">Add Product</button>
                </Link>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-200">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Quantity</th>
                                <th>Sale Count</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products?.map((product, idx) => <tr key={product._id}>
                                    <th>
                                        {
                                            idx + 1
                                        }
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={product?.image} alt="Product image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            product.productName
                                        }
                                    </td>
                                    <td>
                                        {
                                            product.quantity
                                        }
                                    </td>
                                    <td>
                                        {
                                            product.saleCount
                                        }
                                    </td>
                                    <th>
                                        <Link to={`/dashboard/updateProduct/${product._id}`}>
                                            <button
                                                className="btn btn-md bg-[#2eca7f]">
                                                <FaEdit className="text-white 
                                        text-2xl"></FaEdit>
                                            </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            className="btn btn-ghost bg-red-500 btn-md">
                                            <FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </th>

                                </tr>)
                            }
                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;
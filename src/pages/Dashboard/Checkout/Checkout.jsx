import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import { Helmet } from "react-helmet-async";


const Checkout = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const doc = new jsPDF();

    const { data: cartProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["cartProducts", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartProducts/${user?.email}`)
            return res.data
        }
    })

    const handleGetPaid = (product) => {
        console.log(Object.keys(product).toString())
        const soldDate = new Date().toLocaleString();
        const saleProduct = {
            productId: product?.productId,
            shopName: product?.shopName,
            quantity: product?.quantity,
            description: product?.description,
            location: product?.location,
            productionCost: product?.productionCost,
            image: product?.image,
            profitMargin: product?.profitMargin,
            discount: product?.discount,
            email: product?.email,
            addedDate: product?.addedDate,
            productName: product?.productName,
            shopId: product?.shopId,
            sellingPrice: product?.sellingPrice,
            saleCount: product?.saleCount,
            soldDate

        }



        axiosSecure.post('/salesProduct', saleProduct)
            .then(res => {
                console.log(res.data)
                if (res?.data?.insertedId) {

                    axiosSecure.get(`/singleProduct/${product.productId}`)
                        .then(res => {
                            console.log(res.data)
                            const saleCount = parseInt(res.data.saleCount) + 1;
                            const quantity = parseInt(res.data.quantity) - 1;
                            const newQuantity = {
                                saleCount, quantity
                            }
                            axiosSecure.patch(`/product/${product.productId}`, newQuantity)
                                .then(res => {
                                    console.log(res.data)
                                    if (res.data.modifiedCount > 0) {
                                        axiosSecure.delete(`/sold-product-delete/${product._id}`)
                                            .then(res => {
                                                if (res.data.deletedCount) {
                                                    refetch()
                                                    toast.success("Product sold successfully")
                                                   

                                                    // doc.text(`${product.shopName}`,100,20,null,null, "center");
                                                    // doc.addImage(`${product.image}`, "JPEG", 15, 40, 180, 100);
                                                    // doc.text(`Product Name :${product.productName}`, 20, 160);
                                                    // doc.text(`selling Price :${product.sellingPrice}`, 20, 170);
                                                    // doc.text(`Discount Price :${product.discount}`, 20, 180);
                                                    // doc.save(`${product.shopName}.pdf`)
                                                }
                                            })
                                    }
                                })

                        })


                }
            })

    }

    console.log(cartProducts);

    return (
        <div>
            <Helmet>
                <title>NexGen Inventory || CheckOut</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center my-10"> Check Out </h2>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Id</th>
                            <th>Discount</th>
                            <th>Selling Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartProducts?.map((product, idx) => <tr key={product._id}>
                                <th>
                                    {
                                        idx + 1
                                    }
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.productName}
                                </td>
                                <td>{product.quantity}</td>
                                <td>{product._id}</td>
                                <td>{product.discount}</td>
                                <td>$ {product.sellingPrice}</td>
                                <th>
                                    <button
                                        onClick={() => handleGetPaid(product)}
                                        className="btn btn-outline btn-md">Get Paid</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Checkout;
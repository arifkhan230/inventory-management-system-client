import { useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const SalesCollection = () => {
    const axiosSecure = useAxiosSecure()
    const [products, isLoading] = useProducts();

    const [allProducts, setProducts] = useState(products)

    useEffect(() => {
        setProducts(products)
    }, [products])
    

    const handleSearch = (event) => {
        event.preventDefault()
        const searchValue = event.target.searchField.value;
        const filter = allProducts.filter(item => item._id === searchValue)
        console.log(filter)
        setProducts(filter)
    }
    console.log(products);
    console.log(allProducts);

    

    // adding product to the cart
    const handleAddToCart = (product) => {
        // console.log(Object.keys(product).toString())

        const cartData = {
            productId:product?._id,
            shopName:product?.shopName,
            quantity:product?.quantity,
            description:product?.description,
            location:product?.location,
            productionCost:product?.productionCost,
            image:product?.image,
            profitMargin:product?.profitMargin,
            discount:product?.discount,
            email:product?.email,
            addedDate:product?.addedDate,
            productName:product?.productName,
            shopId:product?.shopId,
            sellingPrice:product?.sellingPrice,
            saleCount:product?.saleCount
        }
        console.log(cartData);

        axiosSecure.post("/addToCart",cartData)
            .then(res => {
                console.log(res.data)
                toast.success("product added to the cart")
            })
    }

    if(isLoading){
        return <p>loading......</p>
    }


    // setProducts(products)
    return (
        <div className="my-10">
            <div className="flex justify-between">
                <div className="join">
                    <form  onSubmit={handleSearch} >
                        <input

                            className="input input-bordered join-item"
                            placeholder="Search By Product Id"
                            name="searchField"
                        />
                        <button 
                        
                        type="submit"
                        className="btn join-item bg-black text-white rounded">Search</button>
                    </form>
                </div>
                <Link to="/dashboard/checkout">
                    <button className="btn btn-neutral text-white">
                        Proceed checkout
                    </button>
                </Link>
            </div>
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
                            allProducts?.map((product, idx) => <tr key={product._id}>
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
                                        onClick={() => handleAddToCart(product)}
                                        className="btn btn-outline btn-md">Add For check-out</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default SalesCollection;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { imageUpload } from "../../../api/utils";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const navigate = useNavigate()

    const { data: shop = {}, refetch } = useQuery({
        queryKey: ['singleShop', user?.email],
        queryFn: async () =>
            await axiosSecure.get(`/shops/${user?.email}`)
                .then(res => {
                    return res.data
                })

    })

    const { _id, shopName, email, limit, } = shop;
    console.log(_id, shopName, email, limit)
    console.log(shop)

    const handleAddProduct = async (event) => {
        event.preventDefault();

        if (limit <= 0) {
            navigate('/dashboard/subscription')
            return toast.error("Your product adding limit finished");
        }

        const form = event.target;
        const productName = form.productName.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const productionCost = parseInt(form.productionCost.value);
        const profitMargin = parseInt(form.profitMargin.value);
        const discount = parseInt(form.discount.value);
        const image = form.image.files[0];
        const description = form.description.value;

        console.log(productName, quantity, location, productionCost, profitMargin, discount, image, description,)


        let tax = productionCost * (7.5 / 100)
        let profit = productionCost * (profitMargin / 100)
        let sellingPrice = productionCost + tax + profit;
        console.log(typeof (sellingPrice))

        const productImage = await imageUpload(image)

        const productDetails = {
            shopName,
            quantity,
            description,
            location,
            productionCost,
            image: productImage.data.display_url,
            profitMargin,
            discount,
            email,
            addedDate: new Date().toLocaleDateString(),
            productName,
            shopId: _id,
            sellingPrice,
            saleCount: 0
        }

        console.log(productDetails)

        const { data } = await axiosSecure.post('/shopProduct', productDetails)
        if (data.insertedId) {

            const updateLimit = { limit }
            const res = await axiosSecure.patch(`/updateLimit/${user?.email}`, updateLimit)
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                await refetch()
                toast.success("product added successfully")
            }
        }

    }

    return (
        <div>
            <div className="flex justify-center px-4 items-center">
                <div className="border-2 bg-gray-100 px-8 py-10 w-full ">
                    <h2 className="text-3xl font-bold text-center my-6">Add Product </h2>

                    <form onSubmit={handleAddProduct} className="space-y-4">
                        {/* product name and quantity*/}
                        <div className="md:flex gap-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="productName"
                                    placeholder="Please Enter Product Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Product Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Please Enter Product Quantity "
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>
                        {/* shop location and production cost */}
                        <div className="md:flex gap-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium"> Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Please Enter Product Location"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Production Cost</span>
                                </label>
                                <input
                                    type="text"
                                    name="productionCost"
                                    className="input input-bordered"
                                    placeholder="Production Cost"
                                    required />
                            </div>
                        </div>
                        {/* Profit margin and discount */}
                        <div className="md:flex gap-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Profit Margin</span>
                                </label>
                                <input
                                    type="number"
                                    name="profitMargin"
                                    placeholder="Profit Margin"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className='form-control flex-1'>
                                <label className="label">
                                    <span className="label-text text-xl">Discount</span>
                                </label>
                                <input
                                    type="number"
                                    name="discount"
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>
                        {/* product image and buying price */}
                        <div className="md:flex gap-4">
                            <div className='form-control mt-6 flex-1'>
                                <label className="label">
                                    <span className="label-text text-xl">Upload Your Product Image</span>
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-input w-full max-w-xs"
                                    id="photo"
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Product Description"
                                    name="description"
                                >
                                </textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary text-white w-full my-6">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
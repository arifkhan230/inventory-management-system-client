import { useLoaderData } from "react-router-dom";
import { imageUpload } from "../../../api/utils";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const UpdateProduct = () => {

    const product = useLoaderData();
    const axiosSecure = useAxiosSecure()
    // console.log(Object.keys(product).toString())

    const { _id, quantity, description, location, productionCost, profitMargin, discount, productName, } = product;


    const handleUpdateProduct = async (event) => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const productionCost = parseInt(form.productionCost.value);
        const profitMargin = parseInt(form.profitMargin.value);
        const discount = parseInt(form.discount.value);
        const image = form.image.files[0];
        const description = form.description.value;

        // console.log(productName, quantity, location, productionCost, profitMargin, discount, image, description,)

        const productImage = await imageUpload(image)

        let tax = productionCost * (7.5 / 100)
        let profit = productionCost * (profitMargin / 100)
        let sellingPrice = productionCost + tax + profit;

        const productDetails = {
            productName,
            quantity,
            location,
            productionCost,
            profitMargin,
            discount,
            description,
            sellingPrice,
            image: productImage.data.display_url
        }

        const res = await axiosSecure.patch(`/updateProduct/${_id}`, productDetails)
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            toast.success("Product Updated Successfully")
        }
        console.log(productDetails)
    }



    return (
        <div>
            <div className="flex justify-center px-4 items-center">
                <div className="border-2 bg-gray-100 px-8 py-10 w-full ">
                    <h2 className="text-3xl font-bold text-center my-6">Update Product </h2>

                    <form onSubmit={handleUpdateProduct} className="space-y-4">
                        {/* product name and quantity*/}
                        <div className="md:flex gap-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="productName"
                                    defaultValue={productName}
                                    placeholder="Please Enter Product Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Product Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    name="quantity"
                                    defaultValue={quantity}
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
                                    defaultValue={location}
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
                                    defaultValue={productionCost}
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
                                    defaultValue={profitMargin}
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
                                    defaultValue={discount}
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
                                    defaultValue={description}
                                    placeholder="Product Description"
                                    name="description"
                                >
                                </textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary text-white w-full my-6">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
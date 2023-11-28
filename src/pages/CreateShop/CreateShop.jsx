import toast from "react-hot-toast";
import Container from "../../Components/Container/Container";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/utils";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const CreateShop = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleCreateShop = async (event) => {
        event.preventDefault();
        const form = event.target;
        const shopName = form.shopName.value;
        const shopInfo = form.info.value;
        const location = form.location.value;
        const email = form.email.value;
        const name = form.ownerName.value;
        const image = form.image.files[0]
        const shopLogo = await imageUpload(image)

        console.log({ shopName, shopInfo, location, })
        console.log(shopLogo.data.display_url)

        const shopData = {
            shopName,
            shopInfo,
            location,
            email,
            name,
            shopLogo: shopLogo.data.display_url
        }

        console.log(user.email)
        try {
            const { data } = await axiosPublic.post('/shops', shopData)
            if (data?.insertedId) {
                const managerInfo = {
                    shopName,
                    shopLogo: shopLogo?.data?.display_url,
                    shopId: data?.insertedId,
                    role: "manager"
                }
                const res = await axiosPublic.patch(`/users/manager/${email}`, managerInfo)
                if (res.data.modifiedCount > 0) {
                    toast.success('Shop Added successfully')
                    console.log(res)
                    navigate('/dashboard/manageProducts')
                }
            }
            else {
                toast.error(data.message)
            }
        } catch (err) {
            console.log(err)

        }



        // console.log(err.message)
        // toast.error(err.message)



    }

    return (
        <div className="my-10">
            <Helmet>
                <title>NexGen Inventor || Create Shop</title>
            </Helmet>
            <Container>
                <div className="flex justify-center px-4 items-center">
                    <div className="border-2 bg-gray-100 px-8 py-10 w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-center my-6">Create Your Own Shop </h2>

                        <form onSubmit={handleCreateShop}>
                            {/* shopName */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Shop Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="shopName"
                                    placeholder="Please Enter Shop Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            {/* shopInfo */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Shop Info</span>
                                </label>
                                <input
                                    type="text"
                                    name="info"
                                    placeholder="Please Enter Shop Info"
                                    className="input input-bordered"
                                    required />
                            </div>
                            {/* shop location */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Shop Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Please Enter Shop Info"
                                    className="input input-bordered"
                                    required />
                            </div>
                            {/* owner email */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    placeholder={user.email}
                                    className="input input-bordered"
                                    readOnly
                                    required />
                            </div>
                            {/* Owner name */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="ownerName"
                                    value={user.displayName}
                                    placeholder={user.displayName}
                                    className="input input-bordered"
                                    readOnly
                                    required />
                            </div>
                            <div className='mt-6'>
                                <label className="label">
                                    <span className="label-text text-xl">Upload Your Shop Logo</span>
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-input w-full max-w-xs"
                                    id="photo"
                                    required />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary text-white w-full my-6">
                                Create Shop
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CreateShop;
import { FaImage, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import loginImage from "../../assets/images/loginImage.jpg"


const Login = () => {


    const handleSignIn = (event) => {
        event.preventDefault()
    }

    return (
        <Container>
            <div className="flex mt-20 px-4">
                {/* image div */}
                <div className="hidden md:flex flex-1">
                    <img className="h-[600px] w-full" src={loginImage} alt="" />
                </div>
                {/* form div */}
                <div className="w-full flex-1 border px-8 py-10 bg-cover  bg-gray-200 rounded">
                    <h2 className="text-3xl text-center font-bold mb-6">Login Now!!</h2>
                    <form onSubmit={handleSignIn}>

                        {/* email */}
                        <div className='relative'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="input input-bordered bg-white w-full placeholder:text-black" id="email"
                                required />
                            <span
                                className='absolute right-6 top-3 text-2xl'>
                                <HiMail></HiMail>
                            </span>
                        </div>
                        {/* password */}
                        <div className='relative mt-6'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered bg-white  w-full placeholder:text-black" id="password"
                                required />
                            <span
                                className='absolute right-6 top-3 text-2xl'>
                                <FaLock></FaLock>
                            </span>
                        </div>
                        {/* confirm password */}

                        {/* photo */}
                        <div className='mt-6'>
                            <input
                                type="file"
                                name="image"
                                className="file-input w-full max-w-xs"
                                id="photo"
                                required />
                        </div>

                        <div className='mt-6'>
                            <button className='btn w-full text-white  bg-purple-400 hover:bg-purple-600' type="submit">Login</button>
                        </div>
                    </form>
                    <p
                        className='mt-4 text-center font-medium'>
                        Do not have an account? Please <Link to="/register" className='text-blue-800 underline'>Register</Link> </p>
                </div>
            </div>
        </Container>
    );
};

export default Login;
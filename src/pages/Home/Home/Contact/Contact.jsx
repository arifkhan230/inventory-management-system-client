
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import toast from "react-hot-toast";
import Container from "../../../../Components/Container/Container";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lqhl1wj', 'template_gv5dq37', form.current, 'IiKMFi9pDUk9AELt4')
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent successfully")
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container>
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
            <div className="flex my-12 px-4 gap-0 lg:px-0 ">
                <div className="flex-1 hidden md:flex">
                    <img className="h-[600px] object-cover" src="https://cdn.dribbble.com/users/1604313/screenshots/6905805/contact-illustration.gif" alt="" />
                </div>
                <div className="flex-1 border p-10 bg-[#00146b]">

                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name="from_name" placeholder="Your Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-32 mt-6" placeholder="Message"></textarea>

                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#2eca7f] border-none">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
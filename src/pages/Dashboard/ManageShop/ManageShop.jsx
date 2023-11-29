import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


const ManageShop = () => {
    const axiosSecure = useAxiosSecure()
    const form = useRef();

    const { data: shops = [] } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await axiosSecure.get('/shops')
            return res.data
        }
    })

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lqhl1wj', 'template_t74qz3d', form.current, 'IiKMFi9pDUk9AELt4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const handleSendEmail = () => {
        document.getElementById('my_modal_1').showModal()
        
    }

    return (
        <div>
            <Helmet>
                <title>NexGen Inventory || Manage Shop</title>
            </Helmet>
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
                                    <button
                                        onClick={handleSendEmail}
                                        className="btn bg-[#2eca7f]  text-white hover:bg-[#6610f2]">Send Notice</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {/* modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ManageShop;
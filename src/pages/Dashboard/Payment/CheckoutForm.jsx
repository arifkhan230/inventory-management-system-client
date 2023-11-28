import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ amount }) => {

    const { user } = useAuth()
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    console.log("from checkout", amount);

    const totalPrice = parseInt(amount)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [totalPrice, axiosSecure])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setError(error.message)
        } else {
            setError("")
            console.log('PaymentMethod', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',

                    },
                },
            },
        );

        if (confirmError) {
            console.log('confirmError');
        }
        else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                toast.success("Payment Success")
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice
                }

                const newProductLimit = {
                    newProductLimit: (totalPrice === 10 && 200) || (totalPrice === 20 && 450) || (totalPrice === 50 && 1500)
                }

                const res = await axiosSecure.put("/payment", payment);
                if(res.data.insertedId){
                    axiosSecure.patch(`/newProductLimit/${user.email}`,newProductLimit)
                    .then(res=>{
                        if(res?.data?.modifiedCount){
                            axiosSecure.patch(`/system-admin-income?price=${totalPrice}`)
                            .then(response=>{
                                console.log(response.data)
                                    if(response?.data?.modifiedCount){
                                        navigate("/dashboard/salesCollection")
                                        toast.success("Payment Success")
                                    }
                                }
                            )
                        }
                    })
                }
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className="input input-bordered"
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="btn btn-primary my-6"
            >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            <p>Your TransactionId: {transactionId}</p>
        </form>
    );
};

export default CheckoutForm;
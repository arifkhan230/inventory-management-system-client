import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
    const {amount} = useParams()
    console.log(amount);
    return (
        <div>
           <Elements stripe={stripePromise}>
                <CheckoutForm amount={amount}/>
           </Elements>
        </div>
    );
};

export default Payment;
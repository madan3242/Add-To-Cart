import { 
    PaymentElement, 
    useElements, 
    useStripe 
} from "@stripe/react-stripe-js";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"
import { createOrder } from "../../redux/order/order.action";

const CheckoutForm = ({ orderInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const { cartItems, shippingInfo } = useSelector(state => state.cart);
  const { user } = useSelector(state => state.auth);

  let order = {
    shippingInfo,
    orderItems: cartItems,
    taxAmount : orderInfo.tax,
    shippingAmount: orderInfo.shippingCharges,
    totalAmount: orderInfo.total
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: `http://${window.location.host}/order/success`
        },
        redirect: 'if_required'
    })

    console.log(result);

    if (result.error) {
      console.log(result.error.message);
      toast(result.error.message)
    } else {
        if(result.paymentIntent.status === "succeeded"){
            order.paymentInfo = {
                id: result.paymentIntent.id,
                status: result.paymentIntent.status
            }
        }

        dispatch(createOrder(order))
    }
  };
  
  return (
    <>
      <Form className="text-center"  onSubmit={handleSubmit}>
        <PaymentElement />
        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CheckoutForm;

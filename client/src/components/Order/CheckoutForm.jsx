import { 
    PaymentElement, 
    useElements, 
    useStripe 
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"
import { createOrder } from "../../redux/order/order.action";
import { useNavigate } from 'react-router-dom'
import Loader from "../Loader/Loader";

const CheckoutForm = ({ orderInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, shippingInfo } = useSelector(state => state.cart);
  const [loading, setLoading] = useState(false);

  let order = {
    shippingInfo,
    orderItems: cartItems,
    taxAmount : orderInfo.tax,
    shippingAmount: orderInfo.shippingCharges,
    totalAmount: orderInfo.total
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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

    if (result.error) {
      console.log(result.error.message);
      toast(result.error.message)
      setLoading(false);
    } else {
        if(result.paymentIntent.status === "succeeded"){
            order.paymentInfo = {
                id: result.paymentIntent.id,
                status: result.paymentIntent.status
            }
        }
        setLoading(false);
        dispatch(createOrder(order, navigate))
    }
  };
  
  return (
    <>
      <Form className="text-center"  onSubmit={handleSubmit}>
        <PaymentElement />
        <Button className="mt-3" type="submit" style={{ size: "75px"}}>
          {loading ?  <Loader size={'sm'} /> :'Submit'}
        </Button>
      </Form>
    </>
  );
};

export default CheckoutForm;

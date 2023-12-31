import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51MwjYiIODTgGmCRSQm2F21EyGtUbtuVe08uxLrFvzUK8a5vNGMXsY6a5fstYriQcABdfvCU3ALl7rGK096i9XYoA00DlSk75KW");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);

                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };

        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className='pay'>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}

export default Pay;
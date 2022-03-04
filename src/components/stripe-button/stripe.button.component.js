import React from 'react';
import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KZcdFIPg1mzLRzzN5BfKO11vbtJajBTTZCsZhtwCxRVp8dFcyADKlePsor4MW4UfiVeu5Yjj9OxA4RWWZJLBCxK007nozMvND'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}
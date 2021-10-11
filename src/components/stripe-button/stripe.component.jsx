import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JjKdwF7WY7WoS8Z2EH8JYOyM7vSroNTo9MzA01m6zIFGdBUuNNcLJD4jCHdEOYkWga7F7Yjf6nx8RA1V1I1GwXP00FNs1EbWC';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='crown clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
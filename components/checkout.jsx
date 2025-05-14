"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
	AddressElement,
	ExpressCheckoutElement
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import SubmitButton from "./ui/submit-button";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

	

  return (
    <form onSubmit={handleSubmit}>
			<AddressElement options={{mode: 'billing'}} />
      <PaymentElement options={paymentElementOptions} />
			<ExpressCheckoutElement options={{paymentMethods: {
				apple_pay: 'always',
				google_pay: 'always'
			}}}/>
      <button disabled={isLoading || !stripe || !elements} className="bg-cyan-800 rounded-2xl py-3 px-8 mt-10 text-lg md:text-3xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300">
        <span>
          {isLoading ? "Submitting..." : "Pay $10 USD Now!"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div>{message}</div>}
    </form>
  );
}

export default function CheckoutForm({ clientSecret }) {
  const appearance = {
    theme: 'stripe',
  };
  return (
    <Elements stripe={stripePromise} options={{ appearance, clientSecret }}>
      <PaymentForm />
    </Elements>
  )
}
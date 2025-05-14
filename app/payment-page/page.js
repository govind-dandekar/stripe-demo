import CheckoutForm from "@/components/checkout";
import { stripe } from "@/lib/stripe";

export default async function PaymentPage() {
  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return (
    <div className="w-3/4">
      <CheckoutForm clientSecret={clientSecret} />
    </div>
  );
}

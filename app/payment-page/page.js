import CheckoutForm from "@/components/checkout";
import { stripe } from "@/lib/stripe";

export default async function PaymentPage() {
  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return (
    <div className="w-3/4">
      <CheckoutForm clientSecret={clientSecret} />
    </div>
  );
}

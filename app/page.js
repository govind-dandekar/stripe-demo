import Image from "next/image";
import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";

async function HomePage() {
  return (
    <>
      <Image
        src="/bluey-bingo.png"
        width={128}
        height={200}
        alt="bluey and bingo"
        priority
      />
      <div className="space-y-4 text-nowrap mt-8 text-3xl md:text-6xl">
        <p>Welcome To...</p>
        <p>The Bluey Quiz Game!</p>
      </div>
      <Link href="/checkout-session">
        <SubmitButton>Pay via Stripe Checkout</SubmitButton>
      </Link>

      <Link href="/payment-page">
        <SubmitButton>Pay via Stripe Elements</SubmitButton>
      </Link>
    </>
  );
}

export default HomePage;

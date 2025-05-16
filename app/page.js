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
        <p>BlueyWorld!</p>
      </div>

      <Link href="/payment-page">
        <SubmitButton>Pay via Stripe Elements</SubmitButton>
      </Link>
      <form action="/api/checkout_sessions" method="POST">
        <section>
          <button
            type="submit"
            role="link"
            className="bg-cyan-800 rounded-2xl py-3 px-8 mt-10 text-lg md:text-3xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300"
          >
            Pay via Stripe Checkout
          </button>
        </section>
      </form>
    </>
  );
}

export default HomePage;

import Image from "next/image";

export default function SuccessPage() {
  return (
    <>
      <Image
        src="/bingo-celebrating.png"
        width={128}
        height={200}
        alt="bingo celebrating"
        priority
      />
      <div className="space-y-4 text-nowrap mt-8 text-3xl md:text-6xl">
        <p>Congratulations!</p>
        <p>Your $10 USD Payment Was Successful!</p>
      </div>
    </>
  );
}

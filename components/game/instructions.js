import Image from "next/image";

function Instructions() {
  return (
    <>
      <Image
        src="/bluey-family-car.png"
        width={160}
        height={120}
        alt="bluey family with play car"
        priority
      />
      <div className="text-2xl md:text-4xl mt-8">
        <p>Instructions:</p>
        <div className="text-2xl md:text-4xl space-y-4 mt-4 px-4">
          <p>There are ten multiple choice questions!</p>
          <p>Select the correct answer and then click &quot;Submit!&quot;</p>
          <p>Good luck & have fun!</p>
        </div>
      </div>
    </>
  );
}

export default Instructions;

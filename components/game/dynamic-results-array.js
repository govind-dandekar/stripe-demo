import Image from "next/image";

export const DYNAMIC_RESULTS_ARRAY = [
  {
    image: (
      <Image
        src="/bingo-trifficult.png"
        width={128}
        height={200}
        alt="bingo playing a xylophone"
        priority
      />
    ),
    text: 'Bingo says "Good try! Those questions were really trifficult!"',
  },
  {
    image: (
      <Image
        src="/bingo-celebrating.png"
        width={128}
        height={200}
        alt="bingo celebrating"
        priority
      />
    ),
    text: 'Bingo says "Hooray! Great work!"',
  },
  {
    image: (
      <Image
        src="/bluey-bingo-car.png"
        width={160}
        height={120}
        alt="bluey and bingo playing with a toy car"
        priority
      />
    ),
    text: 'Bluey & Bingo say "Wackadoo! You\'re amazing!"',
  },
];

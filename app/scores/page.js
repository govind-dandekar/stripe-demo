import "server-only";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import { getHighScores } from "@/lib/high-score-actions";

function Fallback() {
  return (
    <div className="space-y-4  mt-8 text-xl md:text-3xl text-wrap">
      <p>
        Bluey & Bingo are retrieving the high scores (but are eating ice cream
        first)!
      </p>
    </div>
  );
}

async function ScoreList() {
  const returnedScores = await getHighScores();
  const sortedScores = returnedScores.sort((a, b) => b.score - a.score);

  return sortedScores.map((score) => {
    return (
      <p className="text-xl md:text-3xl mt-4" key={score.id}>
        <Link href={`scores/${score.id}`}>
          {score.name} {score.score}{" "}
        </Link>
      </p>
    );
  });
}

export default async function ScoresPage() {
  return (
    <>
      <Image
        src="/bluey-bingo-ice-cream.png"
        width={128}
        height={200}
        alt="bluey and bingo"
        priority
      />
      <Suspense fallback={<Fallback />}>
        <p className="text-xl md:text-3xl mt-8">Top Scores:</p>
        <ScoreList />
        <p className="mt-4 text-xl">click on a score to see more detail!</p>
      </Suspense>
    </>
  );
}

import "server-only";

import SubmitButton from "@/components/ui/submit-button";

import { getHighScores } from "@/lib/high-score-actions";

import Link from "next/link";

export default async function ScoreDetail({ params }) {
  const { id } = await params;

  const scores = await getHighScores();
  const selectedScore = scores.filter((score) => +id === score.id);

  return (
    <>
      <div className="text-3xl space-y-6">
        <p>Name: {selectedScore[0].name}</p>
        <p>Level: {selectedScore[0].level}</p>
        <p>LLM: {selectedScore[0].model}</p>
        <p>Score: {selectedScore[0].score}</p>
      </div>
      <Link href="/scores">
        <SubmitButton>Top Scores</SubmitButton>
      </Link>
    </>
  );
}

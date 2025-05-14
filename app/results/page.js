import { DYNAMIC_RESULTS_ARRAY } from "../../components/game/dynamic-results-array";

import { addHighScore } from "@/lib/high-score-actions";

import ResultsClient from "@/components/client-server/client-components/results-client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import _ from "lodash";

export default async function Results({ searchParams }) {
  const { name, level, llm, score } = await searchParams;

  let resultsIndex;

  if (score < 4) {
    resultsIndex = 0;
  } else if (score < 8) {
    resultsIndex = 1;
  } else {
    resultsIndex = 2;
  }

  const updatedName = _.capitalize(name);
  const updatedLevel = _.capitalize(level);
  const updatedLLM = _.capitalize(llm);

  async function handleClick() {
    "use server";
    revalidatePath("/scores");
    await addHighScore(updatedName, score, updatedLevel, updatedLLM);
    redirect("/scores");
  }

  return (
    <>
      {DYNAMIC_RESULTS_ARRAY[resultsIndex].image}
      <p className="text-2xl md:text-5xl mt-8">
        Correct Answers: {score} out of 10!
      </p>
      <p className="text-2xl md:text-4xl mt-6 px-2">
        {DYNAMIC_RESULTS_ARRAY[resultsIndex].text}
      </p>
      <ResultsClient handleClick={handleClick} />
    </>
  );
}

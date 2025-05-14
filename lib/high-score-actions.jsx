import { unstable_cache as nextCache } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

async function fetchHighScores(supabase) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000) // delay for testing & UI purposes
  })
	
	console.log('fetching data');
  let { data: scoresTable } = await supabase.from("scores_table").select("*");
  return scoresTable;
}

// used several Claude prompts (and perplexity and chatGPT and v0 and blog posts)
// for this after several hours of attempting to get it to work
export const getHighScores = async () => {
	"use server"
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Use the cached function or create it if it doesn't exist yet
  const cachedFetchHighScores = nextCache(
    () => fetchHighScores(supabase),
    ['high-scores'],
    {revalidate: 30}
  );

  // Call the cached function and return its result
  return await cachedFetchHighScores();
};

export const addHighScore = async (playerName, correctAnswerCounter, selectedLevel, selectedLLM ) => {
	const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

	const { data, error } = await supabase
  .from('scores_table')
  .insert([
    { name: String(playerName), 
			score: Number(correctAnswerCounter),
			level: String(selectedLevel),
			model: String(selectedLLM)
		},
  ])
  .select()

	

	return (data);
}

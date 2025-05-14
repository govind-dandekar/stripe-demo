import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const addReview = async () => {
	"use server"
  
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

	const { data, error } = await supabase
  .from('reviews_table')
  .insert([
    { text: String('This is a bad game!'), reviewerName: String('Muffin') },
  ])
  .select()
	console.log(data);

  console.log(error);

	return (data);
}

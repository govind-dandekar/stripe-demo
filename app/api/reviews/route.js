import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  // For example, fetch data from your DB here
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  let { data } = await supabase.from("reviews_table").select("*");

  // console.log(data);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

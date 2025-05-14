import { DUMMY_CHARACTERS } from "@/lib/characters";

export async function GET() {
  // For example, fetch data from your DB here
  const characters = DUMMY_CHARACTERS;

  return new Response(JSON.stringify(characters), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

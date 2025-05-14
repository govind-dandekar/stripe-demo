import { DUMMY_CHARACTERS } from "../../../../lib/characters";

export async function GET(request, { params }) {
  const { id } = await params; // id is from the URL, e.g., /api/items/123

  const character = DUMMY_CHARACTERS.filter(
    (character) => character.id === +id
  );

  return new Response(JSON.stringify(character), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

import { redirect } from "next/navigation";

function GamePage() {
  // redirect users to '/' if they manually input '/game'
  return redirect("/");
}

export default GamePage;

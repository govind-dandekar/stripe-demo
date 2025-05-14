import Link from "next/link";

import { FaHome, FaGithub } from "react-icons/fa";

import CustomFooterClient from "@/components/client-server/client-components/custom-footer-client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function CustomFooter() {
  async function scoresRedirect() {
    "use server";
    revalidatePath("/scores");
    redirect("/scores");
  }

  return (
    <div className="flex text-white bg-cyan-400 m-3 py-3 px-3 mt-5 rounded-2xl font-sans justify-evenly align-middle w-3/4 font-thin text-xs lg:text-base">
      <Link href={"/bluey-characters"} className="max-md:hidden">
        <p>bluey characters</p>
      </Link>
      <Link href="/game-reviews" className="max-md:hidden">
        <p>game reviews</p>
      </Link>
      <CustomFooterClient handleClick={scoresRedirect} />
      <Link href="https://github.com/govind-dandekar/react-nextjs-quiz-game/">
        <FaGithub className="scale-150 mt-1" />
      </Link>
      <Link href="/">
        <FaHome className="scale-150 mt-1" />
      </Link>
    </div>
  );
}

export default CustomFooter;

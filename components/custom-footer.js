import Link from "next/link";

import { FaHome, FaGithub } from "react-icons/fa";

function CustomFooter() {
  return (
    <div className="flex text-white bg-cyan-400 m-3 py-3 px-3 mt-5 rounded-2xl font-sans justify-evenly align-middle w-3/4 font-thin text-xs lg:text-base">
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

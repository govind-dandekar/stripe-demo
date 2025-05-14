import Image from "next/image";

function CorrectVSIncorrectAlert({ answerSubmitted, selectedAnswer }) {
  return (
    <div
      className={
        !answerSubmitted
          ? "text-xl md:text-3xl mt-2 invisible py-2 rounded-xl px-4"
          : answerSubmitted && selectedAnswer.flag
          ? "text-xl md:text-3xl mt-2 py-2 rounded-xl px-6 bg-emerald-300"
          : "text-xl md:text-3xl mt-2 py-2 rounded-xl px-6 bg-fuchsia-300"
      }
    >
      {selectedAnswer.flag ? (
        <p>
          <Image
            src="/bingo-celebrating.png"
            alt="bingo celebrating"
            width={30}
            height={40}
            className="inline align-middle"
          />{" "}
          Correct!
        </p>
      ) : (
        <p>
          <Image
            src="/bingo-silly.png"
            alt="bingo looking silly"
            width={30}
            height={40}
            className="inline align-middle"
          />{" "}
          Incorrect
        </p>
      )}
    </div>
  );
}

export default CorrectVSIncorrectAlert;

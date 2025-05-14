"use client";

import * as React from "react";
import { useEffect, useState, useActionState } from "react";

import { getQuestionsVercel } from "@/lib/actions";
import Instructions from "../../../../components/game/instructions";
import AnswerGrid from "../../../../components/game/answer-grid";
import SubmitButton from "@/components/ui/submit-button";
import _ from "lodash";

import { useRouter } from "next/navigation";

import { useParams } from "next/navigation";

import LDRSBouncyAnimationLoader from "@/components/ui/ldrs-bouncy-animation-loader";

function GamePage() {
  const { name, level } = useParams();

  const gameLevelSlug = level;

  // manage flow of game in PlayGame
  const [gameMode, setGameMode] = useState("instructions");
  // track current question
  const [questionIndex, setQuestionIndex] = useState(0);
  // track # of correct answers for results summary
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  // set gemini as default LLM
  const [selectedLLM, setSelectedLLM] = useState("gemini");

  // useActionState to securely retrieve data from server component via server action
  const [quizQuestions, formAction, isPending] = useActionState(
    getQuestionsVercel.bind(null, gameLevelSlug, selectedLLM.toLowerCase()),
    []
  );

  const router = useRouter();

  // select random LLM
  useEffect(() => {
    const LLMOptions = ["Gemini", "Llama", "Deepseek", "Claude"];
    const shuffledLLMOptions = _.shuffle(LLMOptions);
    const randomLLM = shuffledLLMOptions[0];
    setSelectedLLM(randomLLM);
  }, []);

  // update page state upon questions loading
  useEffect(() => {
    if (isPending) {
      setGameMode("loading");
    } else if (!isPending && quizQuestions.length > 0) {
      setGameMode("playQuiz");
    }
  }, [quizQuestions, isPending]);

  function handleAnswerSubmit(answerFlag) {
    if (answerFlag) {
      setCorrectAnswerCounter((prevCounter) => prevCounter + 1);
    }

    // end quiz if questions are complete
    if (questionIndex === 9) {
      setGameMode("results");
      return;
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
  }

  // game instructions UI
  if (gameMode === "instructions") {
    // use action to securely retreive data from server
    return (
      <>
        <Instructions />
        <form action={formAction}>
          <SubmitButton>Start Quiz!</SubmitButton>
        </form>
      </>
    );
  }

  // loading UI for LLM latency
  if (gameMode === "loading") {
    return (
      <>
        <p className="text-2xl md:text-4xl mb-12">
          {selectedLLM + " is Preparing Your Bluey Quiz Questions!"}
        </p>
        <LDRSBouncyAnimationLoader />
      </>
    );
  }

  // play game UI
  if (gameMode === "playQuiz") {
    const displayIndex = questionIndex + 1;
    const displayQuestion = quizQuestions[questionIndex].question;
    const answers = quizQuestions[questionIndex].answers;

    return (
      <>
        <p className="text-lg md:text-3xl mt-6">
          Question {displayIndex} of 10
        </p>
        <p className="text-3xl md:text-5xl mt-4 px-2">{displayQuestion}</p>
        <AnswerGrid answers={answers} onSubmitAnswer={handleAnswerSubmit} />
      </>
    );
  }

  // game results UI
  if (gameMode === "results") {
    const llm = selectedLLM.toLowerCase();
    const score = correctAnswerCounter;

    router.push(
      `/results?name=${name}&level=${level}&llm=${llm}&score=${score}`
    );
  }
}

export default GamePage;

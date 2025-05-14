"use client";
import SubmitButton from "../../ui/submit-button";

export default function ResultsClient({ handleClick }) {
  return <SubmitButton onClick={handleClick}>See High Scores!</SubmitButton>;
}

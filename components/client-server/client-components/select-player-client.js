"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";
import SelectButton from "@/components/ui/select-button";

import {
  baseButtonCSS,
  selectedButtonCSS,
} from "@/components/ui/util/button-css";

export default function SelectPlayerClient() {
  console.log(process.env.VERCEL_URL);

  const [selectedPlayer, setSelectedPLayer] = useState("none");

  function playerSelectHandler(playerName) {
    setSelectedPLayer(playerName);
  }

  // available players
  const playerOptions = [
    { name: "Missy", photoSource: "/missy.png" },
    { name: "Muffin", photoSource: "/muffin.png" },
    { name: "Socks", photoSource: "/socks.png" },
    { name: "Buddy", photoSource: "/buddy.png" },
  ];

  return (
    <>
      <div className="flex space-x-3 mx-2">
        {playerOptions.map((player) => {
          return (
            <SelectButton
              key={player.name}
              buttonText={player.name}
              className={
                player.name === selectedPlayer
                  ? selectedButtonCSS
                  : baseButtonCSS
              }
              onSelect={playerSelectHandler}
            >
              <Image
                width={100}
                height={156}
                alt={player.name}
                src={player.photoSource}
                priority
              />
              <p className="mt-4 text-2xl">{player.name}</p>
            </SelectButton>
          );
        })}
      </div>
      <Link href={`/select-level/${selectedPlayer.toLowerCase()}`}>
        <SubmitButton disabled={selectedPlayer === "none"}>
          {selectedPlayer === "none"
            ? "Pick a Character!!"
            : `Choose ${selectedPlayer}!`}
        </SubmitButton>
      </Link>
    </>
  );
}

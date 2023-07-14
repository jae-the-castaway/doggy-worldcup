"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { lilitaOne } from "./fonts";
import GraphBar from "./GraphBar";

interface Dog {
  breeds: Array<object>;
  url: string;
  id: string;
}

type DogArray = Array<Dog>;

export default function Match(res: any) {
  let dogs: DogArray = Object.keys(res).map((key) => {
    return res[key];
  })[0];
  const firstCandidates = dogs.slice(0, 2);

  const [round, setRound] = useState<number>(0);
  const [roundName, setRoundName] = useState<string>("Round of 16");
  const [candidates, setCandidates] = useState<object[]>(
    dogs.slice(2, dogs.length)
  );
  const [match, setMatch] = useState<object[]>(firstCandidates);
  const [winner, setWinner] = useState<object>({});

  useEffect(() => {
    roundSwitch(round);
    console.log("round", round);
    console.log("candidates", candidates);
    console.log("match", match);
    setMatch(candidates.slice(0, 2));
  }, [candidates]);

  const roundSwitch = (round: number) => {
    if (round >= 0) {
      setRoundName("Round of 16");
    }
    if (round > 7) {
      setRoundName("Round of 8");
    }
    if (round > 11) {
      setRoundName("Semifinals");
    }
    if (round > 13) {
      setRoundName("Finals");
    }
    if (round > 14) {
      setRoundName("winner");
    }
  };

  const handleMatch = (e: any) => {
    const key = e.target.getAttribute("data-id");

    if (round < 14) {
      let previousMatch = match[0];
      let previousMatch2 = match[1];
      if (key === "0") {
        setCandidates((prev) => [...prev, previousMatch]);
      }
      if (key === "1") {
        setCandidates((prev) => [...prev, previousMatch2]);
      }
      if (candidates.length >= 0) {
        setCandidates((prev) => prev.slice(2));
      }
    }

    if (round === 14) {
      if (key === "0") {
        setWinner(match[0]);
      }
      if (key === "1") {
        setWinner(match[1]);
      }
    }
    setRound((prev) => prev + 1);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden bg-slate-950 ">
      <div className=" h-10 z-10 text-center">
        <h1 className={`text-base ${lilitaOne.className}`}>Doggy Derby</h1>
        <div className="text-xs">{roundName}</div>
        <GraphBar round={round} />
      </div>
      <div className="flex h-full content-center overflow-hidden flex-col min-[400px]:flex-row ">
        <p
          className={`${
            winner ? "hidden" : ""
          } text-lg z-10 absolute left-1/2 top-1/2 translate-y-2.5 -translate-x-1/2  min-[400px]:-translate-x-2.5`}
        >
          VS
        </p>
        {match.map((dog: any, index) => (
          <div
            key={index}
            className={`h-1/2 p-1 min-[400px]:h-full flex justify-center items-center content-center ${
              winner ? "h-full" : ""
            }`}
          >
            {dog.breeds && dog.breeds.length > 0 && (
              <div
                onClick={handleMatch}
                className={
                  " bg-slate-900 cursor-pointer h-full  rounded-md  overflow-hidden items-center" +
                  index
                }
                data-id={index}
              >
                <h2
                  className={`${
                    winner.id ? "hidden" : ""
                  } text-xs absolute z-10 top-1/2 left-1/2 -translate-x-1/2 min-[400px]:translate-y-14 -translate-y-2 flex-0  ${
                    index === 0 ? "min-[400px]:left-1/4 -translate-y-4" : ""
                  } ${index === 1 ? "min-[400px]:left-3/4 translate-y-8" : ""}`}
                >
                  {dog.breeds[0].name}
                </h2>
                <Image
                  data-id={index}
                  className={
                    "rounded-md top-1/2 relative -translate-y-1/2 " + index
                  }
                  // fill={true}
                  priority
                  width={1000}
                  height={1000}
                  alt={dog.breeds[0].name}
                  src={dog.url}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <p className="text-[.5em] text-center text-gray-300 mb-1 px-2">
          Click the image and find out who is your favorite dog breed!
        </p>
      </div>
    </div>
  );
}

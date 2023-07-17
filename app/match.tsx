"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { lilitaOne } from "./fonts";
import GraphBar from "./GraphBar";
import { setTextRange } from "typescript";
import { cache } from "react";

interface Dog {
  breeds: Array<object>;
  url: string;
  id: string;
}

type DogArray = Array<Dog>;

// continue from here
// Using On-Demand Revalidation
// to make a refresh button

export default function Match(res: any) {
  let dogs: DogArray = Object.keys(res).map((key) => {
    return res[key];
  })[0];
  const firstCandidates = dogs.slice(0, 2);

  const [round, setRound] = useState<number>(0);
  const [roundName, setRoundName] = useState<string>("Round of 16");
  const [candidates, setCandidates] = useState<object[]>(dogs);
  const [match, setMatch] = useState<object[]>(firstCandidates);
  const [winner, setWinner] = useState<object | null>(null);
  const [target, setTarget] = useState<"0" | "1" | undefined>(undefined);

  const handleMatch = (e: any) => {
    if (round < 15) {
      const key = e.target.getAttribute("data-id");
      setTarget(key);
      setRound((prev) => prev + 1);
      // set target
    }
  };

  useEffect(() => {
    console.log("target", target);
    if (candidates.length > 1 && target) {
      setCandidates((prev) => [...prev.slice(2), match[target]]);
    }
    if (candidates.length === 1 && target) {
    }
    if (candidates.length === 1 && target) {
      setCandidates((prev) => [...prev, match[target]]);
    }
  }, [round]);

  useEffect(() => {
    console.log("candidates", candidates);
    // only when candidates are not empty, set match

    if (round === 15 && target) {
      setWinner(match[target]);
    } else if (candidates.length > 1 && target) {
      roundSwitch(round);
      setMatch(candidates.slice(0, 2));
    }
  }, [candidates]);

  // after set a target, setCandidates with the target and then time to delete the first two candidates from it when..?
  useEffect(() => {
    console.log("match", match);
  }, [match]);

  useEffect(() => {
    console.log("winner", winner);
  }, [winner]);

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

  return (
    <div className="h-full flex flex-col overflow-hidden bg-slate-950 ">
      <div className=" h-10 z-10 text-center mb-2">
        <h1 className={`text-base ${lilitaOne.className}`}>Doggy Derby</h1>
        <div className="text-xs">{roundName}</div>
        <button
          className="absolute top-1 right-1 rounded-md bg-emerald-700 text-xs p-1 text-slate-100-700"
          onClick={() => clearCacheData()}
        >
          Refresh
        </button>
        <GraphBar round={round} />
      </div>
      <div className="flex h-full content-center overflow-hidden flex-col min-[400px]:flex-row ">
        <p
          className={` text-lg z-10 absolute left-1/2 top-1/2 translate-y-2.5 -translate-x-1/2  min-[400px]:-translate-x-2.5`}
        >
          VS
        </p>
        {match.map((dog: any, index) => (
          <div
            key={index}
            className={`h-1/2 p-1 min-[400px]:h-full flex justify-center items-center content-center`}
            //  ${winner ? "h-full" : ""}
          >
            {dog.breeds && dog.breeds.length > 0 && (
              <div
                onClick={handleMatch}
                className={
                  "group bg-slate-900 cursor-pointer h-full  rounded-md  overflow-hidden items-center" +
                  index
                }
                data-id={index}
              >
                <h2
                  className={` text-xs absolute z-10 top-1/2 left-1/2 -translate-x-1/2 min-[400px]:translate-y-14 -translate-y-2 flex-0  ${
                    index === 0 ? "min-[400px]:left-1/4 -translate-y-4" : ""
                  } ${index === 1 ? "min-[400px]:left-3/4 translate-y-8" : ""}`}
                >
                  {dog.breeds[0].name}
                </h2>
                <div className=" relative rounded-md top-1/2 -translate-y-1/2">
                  {" "}
                  <Image
                    data-id={index}
                    className={" z-10 absolute rounded-md  transition-all"}
                    // fill={true}
                    priority
                    width={1000}
                    height={1000}
                    alt={dog.breeds[0].name}
                    src={dog.url}
                  />
                  <Image
                    data-id={index}
                    className={
                      " z-0 relative rounded-md group-hover:blur-lg transition-all"
                    }
                    // fill={true}
                    priority
                    width={1000}
                    height={1000}
                    alt={dog.breeds[0].name}
                    src={dog.url}
                  />
                </div>
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

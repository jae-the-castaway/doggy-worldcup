"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { lilitaOne } from "./fonts";

interface Dog {
  breeds: Array<object>;
  url: string;
  id: string;
}

type DogArray = Array<Dog>;

export default function Match(res: any) {
  const [round, setRound] = useState<number>(16);
  const [candidates, setCandidates] = useState<object[]>([{}]);
  const [match, setMatch] = useState<object[]>([{}, {}]);
  const [winner, setWinner] = useState<object>({});

  let dogs: DogArray = Object.keys(res).map((key) => {
    return res[key];
  })[0];

  useEffect(() => {
    const firstCandidates = dogs.slice(0, 2);
    setCandidates(dogs.slice(2, dogs.length));
    setMatch(firstCandidates);
  }, []);

  const handleMatch = (e: any) => {
    // there will be 15 matches, and 1 winner. I want to display the winner after 15 clicks.
    // I want to display the winner after 15 clicks.

    if (round >= 1) {
      setCandidates((prev) => prev.slice(2, candidates.length));
      if (e.target.className.includes("0")) {
        setCandidates((prevCandidates) => [...prevCandidates, match[0]]);
      } else {
        setCandidates((prevCandidates) => [...prevCandidates, match[1]]);
      }
      // setMatch(candidates.slice(0, 2));
      setRound((prev) => prev - 1);
    } else if (round === 0 && candidates.length === 1) {
      // display winner
      setWinner(candidates[0]);
    }
  };

  useEffect(() => {
    if (round >= 1) {
      setMatch(candidates.slice(0, 2));
    }
    console.log("candidates", candidates);
  }, [candidates]);
  
  return (
    <div className="h-full flex flex-col overflow-hidden ">
      <div className=" h-10 z-10 text-center">
        <h1 className={`text-lg ${lilitaOne.className}`}>Doggy Derby</h1>
        <div className="text-sm">Round of {round}</div>
      </div>
      <div className="flex h-full content-center overflow-hidden flex-col min-[400px]:flex-row ">
        <p className="text-lg absolute left-1/2 top-1/2 translate-y-2.5 -translate-x-1/2  min-[400px]:-translate-x-2.5">
          VS
        </p>
        {match.map((dog: any, index) => (
          <div
            key={index}
            className="h-1/2 p-1 min-[400px]:h-full flex justify-center items-center content-center"
          >
            {dog.breeds && dog.breeds.length > 0 && (
              <div
                className="  h-full flex rounded-md  overflow-hidden items-center"
                key={dog.id}
              >
                <h2
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 min-[400px]:translate-y-14 -translate-y-2 flex-0 text-sm ${
                    index === 0 ? "min-[400px]:left-1/4" : ""
                  } ${
                    index === 1 ? "min-[400px]:left-3/4 translate-y-8" : ""
                  } `}
                >
                  {dog.breeds[0].name}
                </h2>
                <Image
                  onClick={handleMatch}
                  className={"rounded-md cursor-pointer " + index}
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
    </div>
  );
}

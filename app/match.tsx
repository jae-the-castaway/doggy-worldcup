"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Dog {
  breeds: object;
  url: string;
}

type DogArray = Array<Dog>;

export default function Match(res: any) {
  const [match, setMatch] = useState<object[]>([]);
  const [winners, setWinners] = useState<object[]>([]);
  const [round, setRound] = useState<number>(16);
  const [candidates, setCandidates] = useState<[]>([]);

  let dogs: any = Object.keys(res).map((key) => {
    return res[key];
  });
  dogs = dogs[0];
  console.log(dogs[0]);
  const handleMatch = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <div className="TEST text-pink-400">{}</div>
      <div className="">Round of {round}</div>
      <div className="flex">
        {match
          ? match.map((dog) => (
              <div className="">
                <Image
                  height={1000}
                  width={1000}
                  src={dog?.url}
                  alt={`first candidate, ${dog}`}
                />
              </div>
            ))
          : undefined}

        <p>VS</p>
        <div className="match-2"></div>
      </div>
    </div>
  );
}

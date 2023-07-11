"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";

interface Dog {
  breeds: Array<object>;
  url: string;
}

type DogArray = Array<Dog>;

export default function Match(res: any) {
  const [match, setMatch] = useState<object[]>([{}, {}]);
  const [winners, setWinners] = useState<object[]>([]);
  const [round, setRound] = useState<number>(16);
  const [candidates, setCandidates] = useState<[]>([]);

  let dogs: DogArray = Object.keys(res).map((key) => {
    return res[key];
  })[0];

  useEffect(() => {
    setMatch([dogs[0], dogs[1]]);
    // console.log(match[0].breeds[0].name);
    // console.log(match[1].breeds[0].name);
  }, []);
  const handleMatch = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <div className="TEST text-pink-400"></div>
      <div className="">Round of {round}</div>
      <div className="flex">
        {match.map((dog: any, index) => (
          <div key={index}>
            {dog.breeds && dog.breeds.length > 0 && (
              <div key={dog.id}>
                <h2>{dog.breeds[0].name}</h2>
                <Image
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

        <p>VS</p>
        <div className="match-2"></div>
      </div>
    </div>
  );
}

{
  /* <Candidate breed={dog.breeds[0].name} url={dog.url} id={dog.id} /> */
}

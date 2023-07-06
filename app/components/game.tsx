"use client";
import useSWR from "swr";
import { useState } from "react";

const API_KEY =
  "live_HTlHCH4GM29BG2s1z9RxXdrt0tRxdPqdfBs6xjRX0RjKbzrjm6GZZEZTQeT0SKNN";
const url =
  "https://api.thedogapi.com/v1/images/search?limit=16&has_breeds=1&order=random";

async function getDogs() {
  const res = await fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await res.json();
  return data;
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function Game() {
  const [round, setRound] = useState(16);
  const data = await getDogs();
  console.log(data);

  const clickHandler = (dog: object[]) => () => {};

  return (
    <div>
      <h1>Doggy World Cup</h1>
      <h2>Round of {round}</h2>
      <h3>{}</h3>
    </div>
  );
}

// data's length is going to  be 15, which is 16 dogs.
// I want to make a tournament bracket with 16 dogs and 8 matches
// I want to make a function that takes in 2 dogs and returns the winner
// and iterate until there is only one dog left and that dog is the winner  of the tournament bracket and the game.

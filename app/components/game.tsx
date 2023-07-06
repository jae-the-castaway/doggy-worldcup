import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { NextResponse } from "next/server";
import getDogs from "../api/getDogs/route";
import axios from "axios";

export default function Game() {
  const [round, setRound] = useState(16);
  const [list, setList] = useState<object[]>([]);
  const [displays, setDisplays] = useState<object[]>([]);
  const [winners, setWinners] = useState<object[]>([]);

  useEffect(() => {
    const dogs =  getDogs();
    console.log("dogs : " + dogs);
    // dogs.sort(() => Math.random() - 0.5);
    // setList();
    // setDisplays([dogs[0], dogs[1]]);
  }, []);

  const clickHandler = (dog: object[]) => () => {};

  return (
    <div>
      <h1>Doggy World Cup</h1>
      <h2>Round of {round}</h2>
      {/* <h3>{data}</h3> */}
    </div>
  );
}

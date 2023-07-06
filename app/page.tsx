import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //build usestate for round  and setround
  //build usestate for dog and setdog
  const [round, setRound] = useState(1);

  return (
    <main className="">
      <div className="">
        <h1 className="">Doggy World Cup</h1>
        <h2>Round of {}</h2>
      </div>

      <div className="flex "></div>
    </main>
  );
}

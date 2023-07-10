import Match from "./match";

interface Dog {
  breeds: object;
  url: string;
}

type DogArray = Array<Dog>;

const url =
  "https://api.thedogapi.com/v1/images/search?limit=16&has_breeds=1&order=random";

export default async function Home() {
  const data = await fetch(
    `https://api.thedogapi.com/v1/images/search?limit=16&has_breeds=1&order=random&api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  // const dogs: DogArray = Object.keys(res).map((key) => {
  //   return res[key];
  // });

  return (
    <main>
      <h1>Doggy World Cup</h1>
      <Match dogs={res} />
    </main>
  );
}

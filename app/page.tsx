import Match from "./match";

const url =
  "https://api.thedogapi.com/v1/images/search?limit=16&has_breeds=1&order=random";

export default async function Home() {
  const data = await fetch(`${url}&api_key=${process.env.API_KEY}`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });
  const res = await data.json();

  return (
    <main className="h-screen">
      <Match dogs={res} />
    </main>
  );
}

import { NextResponse } from "next/server";

export default async function GET() {
  const res = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=16&has_breeds=1&order=random",
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-Key": process.env.API_KEY,
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return NextResponse.json({ data });
}

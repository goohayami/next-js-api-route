import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https//data.mongodb-api.com/...", {
    headers: {
      "tonent-Tupe": "application/json",
      "Api-key": process.env.DATA_API_KEY,
    },
  });
}

const data = await res.json();

import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json([
    {
      name: "焼肉",
      description: "ハラミが好きです",
      price: 3800,
      website: "https://goohayami.com/",
    },
    {
      name: "ステーキ",
      description: "ミディアムが普通の焼き方です",
      price: 5000,
      website: "https://www.yahoo.co.jp/",
    },
    {
      name: "インドカレー",
      description: "サグ系にハマっています",
      price: 1400,
      website: "https://www.google.co.jp/",
    },
    {
      name: "親子丼",
      description: "新鮮卵を使っています",
      price: 1000,
      website: "https://www.netflix.com/browse",
    },
  ]);
}

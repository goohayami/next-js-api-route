import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json([
    {
      name: "Goohayami",
      description: "JavaScriptメインの初心者ブログ",
      price: "★★★",
      website: "https://goohayami.com/",
    },
    {
      name: "Yahoo Japan",
      description: "老舗の検索サイト",
      price: "★★★★",
      website: "https://www.yahoo.co.jp/",
    },
    {
      name: "Google",
      description: "みんな大好きグーグル先生",
      price: "★★★★★",
      website: "https://www.google.co.jp/",
    },
    {
      name: "NetFlix",
      description: "コロナのお供に",
      price: 1000,
      website: "https://www.netflix.com/browse",
    },
  ]);
}

import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    name: "hayami",
    age: 52,
    country: "Japan",
  });
}

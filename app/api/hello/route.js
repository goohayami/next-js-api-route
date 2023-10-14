import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "hayami",
    age: 52,
    coutry: "Japan",
  });
}

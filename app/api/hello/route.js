import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hayami: 100,
    takumi: 200,
    masayo: 300,
  });
}

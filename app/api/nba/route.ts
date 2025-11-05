import { getEventsByDate, getStandings } from "@/lib/api/basketball";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("standingsByYear")) {
    const standings = await getStandings(searchParams.get("standingsByYear") as string);
    return NextResponse.json({ message: "Success", standings });
  }

  const date = searchParams.get("date") as string;
  const events = await getEventsByDate(date);

  return NextResponse.json({ message: "Success", events: events });
}

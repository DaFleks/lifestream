import * as cheerio from "cheerio";

import { BasketballEvent, BasketballEventData, ConferenceTable } from "@/types/api/basketball";

export function getGameDate(day: number = 0) {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return date.toLocaleDateString("en-CA").replaceAll("-", "");
}

export async function getEventsByDate(date: string) {
  const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${date}`, {
    method: "GET",
  });

  const data = await response.json();

  const events: BasketballEvent[] = data.events.map((event: BasketballEventData) => ({
    id: event.id,
    date: new Date(event.date),
    home: {
      name: event.competitions[0].competitors[0].team.displayName,
      shortName: event.competitions[0].competitors[0].team.shortDisplayName,
      abbreviation: event.competitions[0].competitors[0].team.abbreviation,
      logo: event.competitions[0].competitors[0].team.logo,
      color: event.competitions[0].competitors[0].team.color,
      record: event.competitions[0].competitors[0].records[0].summary,
      score: event.competitions[0].competitors[0].score,
      winner: event.competitions[0].competitors[0].winner,
    },
    away: {
      name: event.competitions[0].competitors[1].team.displayName,
      shortName: event.competitions[0].competitors[1].team.shortDisplayName,
      abbreviation: event.competitions[0].competitors[1].team.abbreviation,
      logo: event.competitions[0].competitors[1].team.logo,
      color: event.competitions[0].competitors[1].team.color,
      record: event.competitions[0].competitors[1].records[0].summary,
      score: event.competitions[0].competitors[1].score,
      winner: event.competitions[0].competitors[1].winner,
    },
    quarter: `Q${event.competitions[0].status.period}`,
    clock: event.competitions[0].status.displayClock,
    status: event.competitions[0].status.type.description,
    venue: {
      name: event.competitions[0].venue.fullName,
      city: `${event.competitions[0].venue.address.city}, ${event.competitions[0].venue.address.state}`,
    },
  }));

  return events;
}

export async function getStandings(year: number | string) {
  const res = await fetch(`https://www.basketball-reference.com/leagues/NBA_${year}_standings.html`, { method: "GET" });

  const data = await res.text();
  const $ = cheerio.load(data);

  const eastTable: ConferenceTable[] = [];
  const westTable: ConferenceTable[] = [];

  $("tbody a")
    .map((i, el) => {
      if (i > 29) return;
      if (i <= 14) eastTable.push({ position: i + 1, team: $(el).text() });
      if (i > 14) westTable.push({ position: i - 14, team: $(el).text() });
    })
    .get();

  $("tbody [data-stat=wins]")
    .map((i, el) => {
      if (i > 29) return;
      if (i <= 14) eastTable[i] = { ...eastTable[i], wins: $(el).text(), losses: $("tbody [data-stat=losses]").eq(i).text() };
      if (i > 14) westTable[i - 15] = { ...westTable[i - 15], wins: $(el).text(), losses: $("tbody [data-stat=losses]").eq(i).text() };
    })
    .get();

  return { east: eastTable, west: westTable };
}

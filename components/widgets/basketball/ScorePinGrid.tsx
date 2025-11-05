"use client";

import Container from "@/components/aetherium/Container";
import ScorePin from "./ScorePin";
import { useEffect, useState } from "react";
import { BasketballEvent } from "@/types/api/basketball";

const ScorePinGrid = () => {
  const [events, setEvents] = useState<BasketballEvent[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/nba?date=20251104", { method: "GET" });
      const data = await res.json();
      setEvents(data.events.reverse());
    })();

    const eventInterval = setInterval(async () => {
      const res = await fetch("/api/nba?date=20251104", { method: "GET" });
      const data = await res.json();
      setEvents(data.events.reverse());
    }, 30000);

    return () => {
      clearInterval(eventInterval);
    };
  }, []);

  return (
    <Container className="grid grid-cols-4 gap-2 overflow-y-hidden">
      {events && (
        <>
          {events.map((event) => (
            <ScorePin
              key={event.id}
              home={{ name: event.home.abbreviation, score: event.home.score, color: event.home.color, logo: event.home.logo }}
              away={{ name: event.away.abbreviation, score: event.away.score, color: event.away.color, logo: event.away.logo }}
              time={{ quarter: event.quarter, clock: event.clock, status: event.status }}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default ScorePinGrid;

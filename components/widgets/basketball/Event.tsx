import { useEffect, useState } from "react";

import Container from "../../aetherium/Container";
import Text from "../../aetherium/Text";

import TeamScore from "./TeamScore";

import { BasketballEvent } from "@/types/api/basketball";

interface EventProps {
  date: string;
  interval?: number;
}

const Event = (props: EventProps) => {
  const [events, setEvents] = useState<BasketballEvent[] | null>(null);

  useEffect(() => {
    let eventInterval: NodeJS.Timeout | null = null;

    const fetchEvents = async () => {
      const res = await fetch(`/api/nba?date=${props.date}`);
      const data = await res.json();
      setEvents(data.events);
    };

    fetchEvents();

    if (props.interval && props.interval > 0) eventInterval = setInterval(fetchEvents, props.interval);

    return () => {
      if (eventInterval) clearInterval(eventInterval);
    };
  }, [props.date, props.interval]);

  return (
    <Container className="space-y-4 w-full">
      {events && (
        <>
          {events.map((event) => (
            <Container key={event.id} className="flex gap-4 items-center bg-neutral-200 p-4 rounded">
              <TeamScore logoSrc={event.home.logo} name={event.home.name} record={event.home.record} />

              <Container className="grow flex flex-col gap-2">
                <Container className="flex items-center justify-center">
                  <Text className={`text-2xl font-medium ${event.home.winner && "font-bold!"}`}>
                    {event.home.score !== "0" && event.home.score}
                  </Text>

                  {event.home.score !== "0" && event.away.score !== "0" && <Text className="px-4">-</Text>}

                  <Text className={`text-2xl font-medium ${event.away.winner && "font-bold!"}`}>
                    {event.away.score !== "0" && event.away.score}
                  </Text>
                </Container>
                <Container className="text-center font-semibold text-sm">
                  {event.status !== "In Progress" && <Text>{event.status}</Text>}
                  {event.status === "In Progress" && (
                    <Text>
                      {event.quarter} - {event.clock}
                    </Text>
                  )}
                </Container>

                <Container className="text-center text-[0.6rem]">
                  <Text className="font-semibold">{event.venue.name}</Text>
                  <Text>{event.venue.city}</Text>
                </Container>
              </Container>

              <TeamScore logoSrc={event.away.logo} name={event.away.name} record={event.away.record} />
            </Container>
          ))}
        </>
      )}
    </Container>
  );
};

export default Event;

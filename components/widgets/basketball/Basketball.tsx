"use client";

import { useEffect, useState } from "react";

import Container from "../../aetherium/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

import Widget from "../../Widget";
import Event from "./Event";
import ConferenceTable from "./ConferenceTable";

import { ConferenceTeam } from "@/types/api/basketball";
import { getGameDate } from "@/lib/api/basketball";

import basketballIcon from "@/public/icons/basketball.png";

const CLASS_TABCONTENT = "h-full rounded overflow-y-auto bg-neutral-100 p-4";

const Basketball = () => {
  const [standings, setStandings] = useState<{ east: ConferenceTeam[]; west: ConferenceTeam[] } | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/nba?standingsByYear=2026", { method: "GET" });
      const data = await res.json();
      setStandings({ east: data.standings.east, west: data.standings.west });
    })();
  }, []);

  return (
    <Widget title="Basketball" src={basketballIcon} className="flex flex-col" size="w-[70%]">
      <Container className="grow h-0">
        <Tabs defaultValue="today" className="h-full text-black">
          <TabsList className="rounded w-full">
            <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="standings">Standings</TabsTrigger>
          </TabsList>

          <TabsContent value="yesterday" className={CLASS_TABCONTENT}>
            <Event date={getGameDate(-1)} />
          </TabsContent>

          <TabsContent value="today" className={CLASS_TABCONTENT}>
            <Event date={getGameDate()} interval={10000} />
          </TabsContent>

          <TabsContent value="tomorrow" className={CLASS_TABCONTENT}>
            <Event date={getGameDate(1)} />
          </TabsContent>

          <TabsContent value="standings" className="overflow-y-hidden flex flex-col rounded bg-neutral-100 p-4">
            <Tabs defaultValue="east" className="grow flex flex-col overflow-y-hidden">
              <TabsList className="rounded bg-neutral-200 mx-auto">
                <TabsTrigger value="east">Eastern Conference</TabsTrigger>
                <TabsTrigger value="west">Western Conference</TabsTrigger>
              </TabsList>

              <TabsContent value="east" className="overflow-y-auto rounded bg-neutral-100">
                {standings && <ConferenceTable teams={standings.east} />}
              </TabsContent>

              <TabsContent value="west" className="overflow-y-auto rounded bg-neutral-100">
                {standings && <ConferenceTable teams={standings.west} />}
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </Container>
    </Widget>
  );
};

export default Basketball;

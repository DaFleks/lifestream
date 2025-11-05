"use client";

import Container from "@/components/aetherium/Container";
import Text from "@/components/aetherium/Text";
import { Separator } from "@/components/ui/separator";
import { darkenHex } from "@/lib/helpers";
import Image from "next/image";

interface ScorePinProps {
  home: { name: string; score: string; color: string; logo: string };
  away: { name: string; score: string; color: string; logo: string };
  time: { quarter: string; clock: string; status: string };
}

const ScorePin = (props: ScorePinProps) => {
  return (
    <Container className="bg-neutral-700 font-bold rounded overflow-hidden text-sm">
      <Container
        className="h-8 w-full flex justify-between items-center gap-4 p-2 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, ${darkenHex(props.home.color, 40)} 0%, #${props.home.color} 100%)` }}>
        <Container className="relative w-10 mx-auto aspect-square">
          <Image src={props.home.logo} alt="" fill className="object-contain" />
        </Container>
        <Text className="">{props.home.name}</Text>
        <Text className="">{props.home.score}</Text>
      </Container>

      <Container
        className="h-8 w-full flex justify-between items-center gap-4 p-2 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, ${darkenHex(props.away.color, 40)} 0%, #${props.away.color} 100%)` }}>
        <Container className="relative w-10 mx-auto aspect-square">
          <Image src={props.away.logo} alt="" fill className="object-contain" />
        </Container>
        <Text className="">{props.away.name}</Text>
        <Text className="">{props.away.score}</Text>
      </Container>

      <Container className="h-8 w-full flex items-center gap-4 p-2 text-xs justify-center">
        {props.time.status === "In Progress" && (
          <>
            <Text className="">{props.time.quarter}</Text>
            <Text className="">{props.time.clock}</Text>
          </>
        )}
        {props.time.status === "Final" && <Text className="w-full text-center">FINAL</Text>}
      </Container>
    </Container>
  );
};

export default ScorePin;

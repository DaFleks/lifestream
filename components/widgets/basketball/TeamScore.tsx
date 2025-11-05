"use client";

import Container from "@/components/aetherium/Container";
import Text from "@/components/aetherium/Text";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TeamScoreProps {
  logoSrc: string | StaticImport;
  name: string;
  record: string;
}

const TeamScore = (props: TeamScoreProps) => {
  return (
    <Container className="space-y-1 w-25 text-center text-xs">
      <Container className="relative w-10 aspect-square mx-auto">
        <Image src={props.logoSrc} alt={`The small size logo of the ${props.name}.`} fill sizes="40px" className="object-contain" />
      </Container>
      <Text className="font-semibold">{props.name}</Text>
      <Text>{props.record}</Text>
    </Container>
  );
};

export default TeamScore;

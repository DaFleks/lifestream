"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ConferenceTeam } from "@/types/api/basketball";

interface ConferenceTableProps {
  teams: ConferenceTeam[];
}

const ConferenceTable = (props: ConferenceTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Team</TableHead>
          <TableHead></TableHead>
          <TableHead className="text-center">W</TableHead>
          <TableHead className="text-center">L</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.teams.map((team, i) => (
          <TableRow key={i}>
            <TableCell className="text-xs! text-center">{team.position}</TableCell>
            <TableCell className="text-xs! w-[200px]">{team.team}</TableCell>
            <TableCell className="text-xs! text-center">{team.wins}</TableCell>
            <TableCell className="text-xs! text-center">{team.losses}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ConferenceTable;

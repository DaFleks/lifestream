export type BasketballEventData = {
  id: string;
  date: string;
  competitions: [
    {
      competitors: [
        {
          team: {
            displayName: string;
            shortDisplayName: string;
            abbreviation: string;
            logo: string;
            color: string;
          };
          records: [{ summary: string }];
          score: string;
          winner: boolean;
        },
        {
          team: {
            displayName: string;
            shortDisplayName: string;
            abbreviation: string;
            logo: string;
            color: string;
          };
          records: [{ summary: string }];
          score: string;
          winner: boolean;
        }
      ];
      status: {
        period: number;
        displayClock: string;
        type: { description: string };
      };
      venue: { fullName: string; address: { city: string; state: string } };
    }
  ];
};

export type BasketballEvent = {
  id: string;
  date: Date;
  home: Team;
  away: Team;
  quarter: string;
  clock: string;
  status: string;
  venue: Venue;
};

export type Team = {
  name: string;
  shortName: string;
  abbreviation: string;
  logo: string;
  color: string;
  record: string;
  score: string;
  winner: boolean;
};

export type Venue = {
  name: string;
  city: string;
};

export type ConferenceTeam = {
  position: number;
  team: string;
  wins?: string;
  losses?: string;
};

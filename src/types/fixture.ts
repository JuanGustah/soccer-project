export type fixtureTeam = {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
};

export type fixtureEvent = {
  time: {
    elapsed: number;
    extra: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number;
    name: string;
  };
  type: string;
  detail: string;
  comments: string;
};

export declare type fixture = {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: fixtureTeam;
    away: fixtureTeam;
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number;
      away: number;
    };
    penalty: {
      home: number;
      away: number;
    };
  };
};

export type playerPositionInGrid = {
  player: {
    id: number;
    name: string;
    number: number;
    pos: string;
    grid: string;
  };
};

export type lineup = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  coach: {
    id: number;
    name: string;
  };
  formation: string;
  startXI: playerPositionInGrid[];
  substitutes: {
    player: {
      id: number;
      name: string;
      number: number;
      pos: string;
    };
  }[];
};

export declare type fixtureDetails = fixture & {
  events: fixtureEvent[];
  lineups: [lineup, lineup];
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    statistics: {
      type: string;
      value: number | string;
    }[];
  }[];
  players: {
    team: {
      id: number;
      name: string;
      logo: string;
      update: string;
    };
    players: {
      player: {
        id: number;
        name: string;
        photo: string;
      };
    }[];
  }[];
};

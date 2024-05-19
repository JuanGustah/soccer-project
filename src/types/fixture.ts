export type fixtureTeam = {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
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

export declare type fixtureDetails = fixture & {
  events: {
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
    type: "Card";
    detail: string;
    comments: string;
  }[];
  lineups: {
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
    startXI: {
      player: {
        id: number;
        name: string;
        number: number;
        pos: string;
        grid: string;
      };
    }[];
    substitutes: {
      player: {
        id: number;
        name: string;
        number: number;
        pos: string;
      };
    }[];
  }[];
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

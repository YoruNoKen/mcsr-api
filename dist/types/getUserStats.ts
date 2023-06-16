export interface getUserStats {
  uuid: string;
  nickname: string;
  badge: number;
  elo_rate: number;
  elo_rank?: number;
  created_time: Date;
  latest_time: Date;
  total_played: number;
  season_played: number;
  highest_winstreak: number;
  current_winstreak: number;
  prev_elo_rate: number;
  best_elo_rate: number;
  best_record_time: number;
  records: {
    1: {
      win: number;
      lose: number;
      draw: number;
    };
    2: {
      win: number;
      lose: number;
      draw: number;
    };
  };
  achievements: [
    {
      achieve_type: number;
      tag_name: string;
      achieve_time: Date;
      achieve_data: string;
    }
  ];
  connections: {
    discord?: {
      id: string;
      name: string;
    };
    twitch?: {
      id: string;
      name: string;
    };
    youtube?: {
      id: string;
      name: string;
    };
  };
}

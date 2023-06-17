import { playerInfo } from "./playerInfo";

export interface globalLeaderboard {
  users: playerInfo[];
  season_number: number;
  season_end_time: number;
}

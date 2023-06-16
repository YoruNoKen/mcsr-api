import { playerInfo } from "./playerInfo";

export interface timeLeaderboard {
  final_time_rank: number;
  match_id: number;
  final_time: number;
  match_date: Date;
  user: playerInfo[];
}

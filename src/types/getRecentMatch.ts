import { playerInfo } from "./playerInfo";
import { scoreChange } from "./scoreChange";

export interface getRecentMatch {
  match_id: number;
  match_type: number;
  match_date: Date;
  winner?: string;
  final_time: number;
  match_season: number;
  members: playerInfo[];
  score_changes?: scoreChange[];
  forfeit: boolean;
  is_decay: boolean;
}

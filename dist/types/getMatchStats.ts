import { playerInfo } from "./playerInfo";
import { scoreChange } from "./scoreChange";

export interface getMatchStats {
  match_id: number;
  seed_type: string;
  match_type: string;
  winner?: string;
  members: playerInfo[];
  final_time: number;
  score_changes?: scoreChange[];
  forfeit: boolean;
  match_season: number;
  category: string;
  match_date: Date;
  is_decay: boolean;
  timelines: [
    {
      time: number;
      timeline: string;
      uuid: string;
    }
  ];
}

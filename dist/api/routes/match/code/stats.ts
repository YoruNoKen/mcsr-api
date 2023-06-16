import { getMatchStats } from "../../../../types/getMatchStats";

export default async function getMatchStats(match_id: number | string): Promise<getMatchStats> {
  let baseURL = "https://mcsrranked.com/api";
  if (match_id == undefined) {
    throw new Error("match id must be a number or defined");
  }
  const url = `${baseURL}/matches/${match_id}`;

  const response = await fetch(url).then((res) => res.json());

  return response.data;
}

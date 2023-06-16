import { timeLeaderboard } from "../../../../types/timeLeaderboard";

export default async function getGlobalFastestTime(distinct: boolean): Promise<timeLeaderboard> {
  let baseURL = "https://mcsrranked.com/api";
  let url = `${baseURL}/record-leaderboard`;
  if (distinct === true) {
    url += "/distinct";
  }

  const response = await fetch(url).then((res) => res.json());

  return response.data;
}

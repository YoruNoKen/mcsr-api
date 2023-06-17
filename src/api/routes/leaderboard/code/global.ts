import { globalLeaderboard } from "../../../../types/getGlobalLeaderboard";

export default async function getGlobalLeaderboard(): Promise<globalLeaderboard> {
  let baseURL = "https://mcsrranked.com/api";
  const url = `${baseURL}/leaderboard`;
  const response = await fetch(url).then((res) => res.json());

  return response.data;
}

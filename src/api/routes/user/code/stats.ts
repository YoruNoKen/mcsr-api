import { getUserStats } from "../../../../types/getUserStats";
export default async function getUserStats(username: string, opponent?: string): Promise<getUserStats> {
  let baseURL = "https://mcsrranked.com/api";
  let url = `${baseURL}/users/${username}`;
  if (opponent !== undefined) {
    url += `/versus/${opponent}`;
  }

  const response = await fetch(url).then((res) => res.json());

  if (response.status == "error") {
    throw new Error("Invalid Username");
  }
  return response.data;
}

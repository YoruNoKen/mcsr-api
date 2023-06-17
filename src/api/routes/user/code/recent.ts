import { addFilters } from "../../../../utils/addFilters";
import { getRecentMatch } from "../../../../types/getRecentMatch";

export default async function getRecentMatch(username: string, { opponent, match_type, page, count }: { opponent?: string; match_type: string; page: number | string; count: number | string }): Promise<getRecentMatch> {
  let baseURL = "https://mcsrranked.com/api";
  let type = match_type;
  const filter = addFilters(type, page, count);

  let url = `${baseURL}/users/${username}`;
  if ((opponent as string | undefined) !== undefined) {
    url += `/versus/${opponent}`;
  }
  url += `/matches${filter}`;

  const response = await fetch(url).then((res) => res.json());

  if (response.status == "error") {
    if (response.data == null) {
      throw new Error("Invalid Username");
    } else {
      throw new Error(response.data);
    }
  }
  return response.data;
}

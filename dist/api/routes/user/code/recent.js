import { addFilters } from "../../../../utils/addFilters.js";

/**
 * Gets the recent matches for a given user.
 * @param {string} username - The username of the user to get recent matches for.
 * @param {Object} options - Options object.
 * @param {string} options.opponent - The opponent username to filter by.
 * @param {string} options.match_type - The type of matches to filter by.
 * @param {number} options.page - The page number of the results to get.
 * @param {number} options.count - The number of results to get per page.
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the recent matches.
 */

export default async function getRecentMatch(username, { opponent, match_type, page, count }) {
  this.baseURL = "https://mcsrranked.com/api";
  let type = match_type;
  const filter = addFilters(type, page, count);

  let url = `${this.baseURL}/users/${username}`;
  if (opponent !== undefined) {
    url += `/versus/${opponent}`;
  }
  url += `/matches${filter}`;

  let response;
  try {
    response = await fetch(url).then((res) => res.json());
  } catch (err) {
    return err;
  }

  if (response.status == "error") {
    if (response.data == null) {
      throw new Error("Invalid Username");
    } else {
      throw new Error(response.data);
    }
  }
  return response.data;
}

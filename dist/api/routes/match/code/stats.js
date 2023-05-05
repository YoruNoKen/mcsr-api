/**
 * Gets the statistics of a match.
 * @param {string} match_id - The ID of the match you want to get the stats of.
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the file.
 */

export default async function getMatchStats(match_id) {
  this.baseURL = "https://mcsrranked.com/api";
  if (match_id == undefined) {
    throw new Error("match id must be a number or defined");
  }
  const url = `${this.baseURL}/matches/${match_id}`;

  let response;
  try {
    response = await fetch(url).then((res) => res.json());
  } catch (err) {
    return err;
  }

  return response.data;
}

/**
 * Gets the statistics of a match.
 * @param {boolean} distinct - Whether or not the leaderboard should only have one time per user.
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the file.
 */

export default async function getGlobalFastestTime(distinct) {
  this.baseURL = "https://mcsrranked.com/api";
  let url = `${this.baseURL}/record-leaderboard`;
  if (distinct == true) {
    url += "/distinct";
  }

  let response;
  try {
    response = await fetch(url).then((res) => res.json());
  } catch (err) {
    return err;
  }

  return response.data;
}

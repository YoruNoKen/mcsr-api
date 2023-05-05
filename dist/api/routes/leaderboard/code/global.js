/**
 * Gets the global leaderboard.
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the file.
 */

export default async function getGlobalLeaderboard() {
  this.baseURL = "https://mcsrranked.com/api";
  const url = `${this.baseURL}/leaderboard`;
  let response;
  try {
    response = await fetch(url).then((res) => res.json());
  } catch (err) {
    return err;
  }

  return response.data;
}

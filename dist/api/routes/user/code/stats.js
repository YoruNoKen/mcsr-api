/**
 * Gets the statistics of a user(s)
 * @param {string} username - The username of the user to get statistics for.
 * @param {string} opponent - The username of the user to compare the statistics with.
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the file.
 */

export default async function getUserStats(username, opponent) {
  this.baseURL = "https://mcsrranked.com/api";
  let url = `${this.baseURL}/users/${username}`;
  if (opponent !== undefined) {
    url += `/versus/${opponent}`;
  }

  let response;
  try {
    response = await fetch(url).then((res) => res.json());
  } catch (err) {
    return err;
  }

  if (response.status == "error") {
    throw new Error("Invalid Username");
  }
  return response.data;
}

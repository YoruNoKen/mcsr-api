class ranked_api {
	static baseURL = "https://mcsrranked.com/api";

	async getUserStats(username, opponent) {
		let url = `${ranked_api.baseURL}/users/${username}`;
		if (opponent !== undefined) {
			url = `${ranked_api.baseURL}/users/${username1}/versus/${username2}`;
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

	async getGlobalLeaderboard() {
		const url = `${ranked_api.baseURL}/leaderboard`;

		let response;
		try {
			response = await fetch(url).then((res) => res.json());
		} catch (err) {
			return err;
		}

		return response.data;
	}

	async getRecentMatch(username, { opponent, match_type, page, count }) {
		let _type = match_type;
		let _page = page;
		let _count = count;
		const filter = addFilters(_type, _page, _count);

		let url = `${ranked_api.baseURL}/users/${username}/matches${filter}`;
		if (opponent !== undefined) {
			url = `${ranked_api.baseURL}/users/${username}/versus/${opponent}/matches${filter}`;
		}

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

}

function addFilters(match_type, page, count) {
	let _filter = "";
	if (match_type !== undefined) {
		_filter += `&filter=${match_type}`;
	}
	if (page !== undefined) {
		_filter += `&page=${page}`;
	}
	if (count !== undefined) {
		_filter += `&count=${count}`;
	}
	_filter = _filter.replace("/^&/", "?");
	return _filter;
}

module.exports.ranked_api = ranked_api;

class ranked_api {
	static baseURL = "https://mcsrranked.com/api";

	async getUserStats(username) {
		const url = `${ranked_api.baseURL}/users/${username}`;

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

	async getUserVersus(username1, username2) {
		const url = `${ranked_api.baseURL}/users/${username1}/versus/${username2}`;

		let response;
		try {
			response = await fetch(url).then((res) => res.json());
		} catch (err) {
			return err;
		}

		if (response.status == "error") {
			throw new Error("Invalid Username(s)");
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

	async getRecentMatch(username, { match_type, page, count }) {
		let _type = match_type;
		let _page = page;
		let _count = count;

		let _filter = "";
		if (_type !== undefined) {
			_filter += `&filter=${_type}`;
		}
		if (_page !== undefined) {
			_filter += `&page=${_page}`;
		}
		if (_count !== undefined) {
			_filter += `&count=${_count}`;
		}
		_filter = _filter.replace("/^&/", "?");

		const url = `${ranked_api.baseURL}/users/${username}/matches${_filter}`;

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

	async getVersusMatch(username1, username2, { match_type, page, count }) {
		let _type = match_type;
		let _page = page;
		let _count = count;

		let _filter = "";
		if (_type !== undefined) {
			_filter += `&filter=${_type}`;
		}
		if (_page !== undefined) {
			_filter += `&page=${_page}`;
		}
		if (_count !== undefined) {
			_filter += `&count=${_count}`;
		}
		_filter = _filter.replace("/^&/", "?");

		const url = `${ranked_api.baseURL}/users/${username1}/versus/${username2}/matches${_filter}`;

		let response;
		try {
			response = await fetch(url).then((res) => res.json());
		} catch (err) {
			return err;
		}

		if (response.status == "error") {
			if (response.data == null) {
				throw new Error("Invalid Username(s)");
			} else {
				throw new Error(response.data);
			}
		}

		return response.data;
	}
}

module.exports.ranked_api = ranked_api;

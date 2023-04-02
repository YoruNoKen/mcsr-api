class MCSR {
	static baseURL = "https://mcsrranked.com/api";

	async getUserStats(username) {
		const url = `${MCSR.baseURL}/users/${username}`;

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
		const url = `${MCSR.baseURL}/users/${username1}/versus/${username2}`;

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
		const url = `${MCSR.baseURL}/leaderboard`;

		let response;
		try {
			response = await fetch(url).then((res) => res.json());
		} catch (err) {
			return err;
		}

		return response.data;
	}

	async getRecentMatch(username, match_type) {
		let _type = match_type;
		let _filter;
		if (_type == undefined) {
			_filter = "";
		} else {
			_filter = `?filter=${_type}`;
		}

		const url = `${MCSR.baseURL}/users/${username}/matches${_filter}`;

		let response;
		try {
			response = await fetch(url, { method: "GET" }).then((res) => res.json());
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

	async getVersusMatch(username1, username2, match_type) {
		let _type = match_type;
		let _filter;
		if (_type == undefined) {
			_filter = "";
		} else {
			_filter = `?filter=${_type}`;
		}

		const url = `${MCSR.baseURL}/users/${username1}/versus/${username2}/matches${_filter}`;

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

module.exports.MCSR = MCSR;

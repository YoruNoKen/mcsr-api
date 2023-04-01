class MCSR {
	static baseURL = "https://mcsrranked.com/api";

	async getUserStats(username) {
		const url = `${this.baseURL}/users/${username}`;

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
		const url = `${this.baseURL}/users/${username1}/versus/${username2}`;

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
		const url = `${this.baseURL}/leaderboard`;

		let response;
		try {
			response = await fetch(url).then((res) => res.json());
		} catch (err) {
			return err;
		}

		return response.data;
	}

	async getRecentMatch(username) {
		const url = `${this.baseURL}/users/${username}/matches`;

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

	async getVersusMatch(username1, username2) {
		const url = `${this.baseURL}/users/${username1}/versus/${username2}/matches`;

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
}

module.exports.MCSR = MCSR;

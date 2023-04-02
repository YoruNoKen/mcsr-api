### mcsr-api

# Usage

## [Documentation](https://github.com/YoruNoKen//wiki)

## Installation

```
npm install mcsr-api
```

# Functions

```js
const { MCSR } = require("mcsr-api");

var api = new MCSR();

const user = await api.getUserStats("user");
const user_versus = await api.getUserVersus("user1", "user2");

const leaderboard = await api.getGlobalLeaderboard();

const user_match = await api.getRecentMatch("user", match_type);
const user_match_versus = await api.getVersusMatch("user1", "user2", match_type);
```
### mcsr-api

# Usage

## [Documentation](https://github.com/YoruNoKen//wiki)

## Installation

```
npm install mcsr-api
```

# Functions

```js
const { MCSR } = require("./index.js");

var api = new MCSR();

const user = await api.getUserStats("username");
const user_versus = await api.getUserVersus("username1", "username2");

const leaderboard = await api.getGlobalLeaderboard();

const user_match = await api.getRecentMatch();
const user_match_versus = await api.getVersusMatch();
```
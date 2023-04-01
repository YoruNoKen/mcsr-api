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

const user = api.getUserStats("username");
const user_versus = api.getUserVersus("username1", "username2");

const leaderboard = api.getGlobalLeaderboard();

const user_match = api.getRecentMatch();
const user_match_versus = api.getVersusMatch();
```
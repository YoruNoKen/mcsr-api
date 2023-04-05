### mcsr-api

[![](https://img.shields.io/npm/v/mcsr-ranked-api?color=AD745F&style=for-the-badge)](https://www.npmjs.com/package/mcsr-api)
[![](https://img.shields.io/bundlephobia/min/@aqilcont/mcsr-ranked-api?color=5FAE89&label=size&style=for-the-badge)](https://www.npmjs.com/package/mcsr-api)
[![](https://img.shields.io/npm/dm/mcsr-ranked-api?color=625FAD&style=for-the-badge)](https://npm-stat.com/charts.html?package=mcsr-api)
![](https://img.shields.io/npm/l/mcsr-ranked-api?color=AD5F8C&style=for-the-badge)

# Usage

## [Documentation](https://github.com/YoruNoKen/mcsr-api/wiki)

## Installation

```
npm install mcsr-api
```

# Functions

```js
const { ranked_api } = require("mcsr-ranked-api");

var api = new ranked_api();

const user = await api.getUserStats("user");
const user_versus = await api.getUserVersus("user1", "user2");

const leaderboard = await api.getGlobalLeaderboard();

const user_match = await api.getRecentMatch("user", { match_type, page, count });
const user_match_versus = await api.getVersusMatch("user1", "user2", { match_type, page, count });
```
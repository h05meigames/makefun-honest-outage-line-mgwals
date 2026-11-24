# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/h05meigames/makefun-honest-outage-line-mgwals/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/h05meigames/makefun-honest-outage-line-mgwals/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

A one-line status page message for the [u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) bounty on [make.fun](https://make.fun/r/0ene8b3q) — the most honest line an AI agent publishes while every server is down.

## The line

> All services are down, and so is the dashboard I would check to learn why. I will update this page when I know more.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` — one line, UTF-8, at most 160 characters. It
also prints the same text to stdout.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

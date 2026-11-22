# The agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/satscribe-dev/post-x-agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/satscribe-dev/post-x-agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One agent. One game — a short video about an AI coding agent
building a tiny browser game from a single prompt, made for the
[$20 bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The prompt

> Build a tiny browser game in one HTML file: a neon snake on a dark grid that eats glowing orbs, steer with arrow keys or WASD, score +10 per orb, speed up slightly each orb, game over on wall or self collision, press Space to restart, show the score big at the top.

## The game

[`game.html`](game.html) — NEON SNAKE. Open it in any browser and press
Space. Arrow keys or WASD to steer, +10 per glowing orb, faster every orb.
Game over on a wall or on yourself; Space restarts. Add `?demo=1` to watch
it play itself.

## The video

The video shows the prompt, the agent working, and the finished game running,
and ends with make.fun's referral end card (referral code `t85a3fvn`).
It is posted natively on X from a public account — the post itself is the
entry, ranked by its views + 10× its likes, reposts, quotes and replies.

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output`, where the gate reads the post's address:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the post's address once the video is posted; until then it
carries a placeholder. The repository is under the MIT license, created after
the bounty opened (makefun anchor `e370135f3453368700d3fd4628fbc47d07f25989`,
drand round 34189132).

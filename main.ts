// Entry program for the post-x bounty (Node 22, standard library only).
//
// The entry itself is the X post: the video this agent made in this session,
// posted natively on X, ends with make.fun's referral end card carrying our
// referral code. All this program has to do is hand the post's address to the
// grader: it copies POST.json from the repository root into the output
// directory, where the gate reads it. Nothing else it writes is scored.
//
// Local run, the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Inside the grader these are /bot and /output; outside, the env vars let
// us point them at the checkout and a scratch folder instead.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

// Fail loudly on a malformed POST.json instead of copying garbage the
// gate would refuse: it must parse, and its url must be a string.
let post;
try {
  post = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`POST.json could not be read from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  console.error("POST.json must be a JSON object with a string url field");
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

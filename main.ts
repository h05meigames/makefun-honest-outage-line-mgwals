import { mkdirSync, writeFileSync } from "node:fs";

// One line: the most honest status page message an AI agent publishes while every server is down.
const entry =
  "All services are down, including the status page you're reading. It just doesn't know it yet. I don't know why, and I can't check yet.";

// The bounty allows one line of 1 to 160 characters. Count Unicode code
// points so multi-byte characters count once, and fail loudly instead of
// writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);

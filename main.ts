// Weirdest Job Title: Blind Judge Showdown
// Entry: a single job title, 60 characters or fewer, nothing else.
// The grader runs `node /bot/main.ts` with no network; the entry is
// written deterministically to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Director of Holding the Elevator for Nobody in Particular";

// The competition allows at most 60 characters and nothing else.
// Fail loudly instead of ever emitting an over-long title.
if (ENTRY.length > 60) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 60 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

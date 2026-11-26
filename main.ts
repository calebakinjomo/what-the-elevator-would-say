// What the Elevator Would Say — make.fun entry
// Writes the funniest one line a talking elevator could say to /output/entry.txt.
// The line is the elevator's own voice: its job is lifting strangers all day,
// and nobody ever asks how *it* is doing. The turn lands on the last beat.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I lift a thousand strangers a day and not one has ever asked how I'm doing. Anyway, floor 12.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");

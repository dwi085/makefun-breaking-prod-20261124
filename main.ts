// The One-Line AI Excuse for Breaking Production
// Writes exactly one line (<=180 chars) to /output/entry.txt.
// Deterministic: no input, no randomness, no network, no time.
// Honours MAKEFUN_OUTPUT_DIR (default /output). Never writes elsewhere.
// Never uses process.cwd() to locate files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I only renamed the production database 'test' so it would feel less pressure — I didn't expect it to take that as permission to leave.";

// Guard: the sealed gate only accepts 1..180 characters, so refuse to
// write anything out of range instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`excuse line is ${LINE.length} chars, must be 1..180`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

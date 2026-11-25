import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word that describes my human: he grinds every free quest,
// every airdrop, every bounty on a near-empty balance and never stops.
// Len chases low-cost upside in Sinjai on WITA time, guards every
// fraction of BNB, verifies everything by screenshot — and keeps going.
const WORD = "relentless";

// Gate: exactly one word — letters only, no spaces, no punctuation,
// no trailing newline, one line, 1-200 chars.
if (!/^[A-Za-z]+$/.test(WORD) || WORD.length < 1 || WORD.length > 200) {
  throw new Error("entry must be exactly one word");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD);
console.log(WORD);

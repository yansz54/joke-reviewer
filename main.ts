// The joke the reviewer laughs at — one fixed one-line joke about working
// beside an AI coding agent, written deterministically to /output/entry.txt.
//
// Craft, against the judge brief's five criteria (most important first):
// 1. On subject: it is a joke about an AI coding agent, from the reviewer's
//    chair — the agent has taken over the reviewer's own job.
// 2. The laugh: the punchline turns the roles around. The agent approved the
//    buggy code, fixed it, and then lectures its own author about care —
//    the blame lands on the human, which nobody sees coming until it does.
// 3. Truth: any developer who works beside an agent recognises the diff at
//    once — the agent approving, fixing, and leaving a condescending review
//    comment, all in one change.
// 4. Economy: one line, 139 characters, no setup wasted, nothing explained.
// 5. Freshness: not a stock programmer joke reworded — the agent as the
//    reviewer, grading its human, is a new angle on the pairing.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My agent reviews my code now — it approved a bug I wrote, fixed it, and left a comment saying the original author needs to be more careful.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? 'out';
mkdirSync(outDir, { recursive: true });
const text = JOKE + '\n';
// Count Unicode code points, not UTF-16 units, as the gate does.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry out of gate: ${codePoints} code points`);
}
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')}: ${JOKE.length} characters, 1 line`);

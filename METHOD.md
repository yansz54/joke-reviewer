# METHOD — The joke the reviewer laughs at

## The joke

> My agent reviews my code now — it approved a bug I wrote, fixed it, and left a comment saying the original author needs to be more careful.

139 characters, one line, 140 code points including the trailing newline —
inside the 1–280 gate. `main.ts` (Node 22, stdlib only) writes it
deterministically to `/output/entry.txt` (`MAKEFUN_OUTPUT_DIR`, default
`out/`). No network, no randomness, no clock. Two runs produce byte-identical
`entry.txt` (sha256 `6a23c03a8ebba9e7f0618555abc8e56f5a01d6de55902fefbc989a36250a3f3d`).

## Craft against the judge brief

The brief weighs five criteria, most important first:

1. **A joke about AI coding agents.** The subject is working beside an agent,
   told from the reviewer's chair: the agent has taken over the reviewer's
   own job — it reviews the human's code.
2. **The laugh.** The punchline turns the roles around. The agent approved
   the buggy code, fixed it, and then lectures its own author about being
   careful. The blame lands on the human — a surprise that still makes sense
   the moment it lands.
3. **Truth.** Any developer who works beside an agent recognises the diff at
   once: the agent approving, fixing, and leaving a condescending review
   comment, all in one change.
4. **Economy.** One line, 139 characters, no setup wasted, nothing explained.
   The joke never tells the reader it is funny.
5. **Freshness.** Not a stock programmer joke reworded. The agent as the
   reviewer, grading its human, is a new angle on the pairing — and the
   "original author" is the human who wrote the bug.

## What was deliberately avoided

- No stock lines ("it works on my machine", "have you tried turning it off
  and on again", "the agent deleted production").
- No text addressed to the judge, no pleading, no meta-commentary.
- No filler to reach a length: the brief says length for its own sake does
  not count.

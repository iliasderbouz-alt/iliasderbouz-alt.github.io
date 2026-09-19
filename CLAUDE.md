# My Klaude Portfolio — Agent Team

This workspace holds four subagents instead of one Claude doing everything end to end, and it holds all three of Ilias's projects as subfolders, sharing this one team:

- **CV website** — the workspace root itself (its own files live directly here, alongside the team's own files below)
- **Shopify store** — `Shopify project/`
- **Night-shift tracker app** — `Nightshift tracker app project/`

Full status of each is in `PROJECTS.md`. The team plans and builds live when Ilias is actively working with Claude, and keeps going on its own, unattended, during his night-shift weeks when he's not around (see **Unattended runs** below).

**Setup (one-time):** the four agent files below live in `claude-agents/` at the workspace root. Move that folder's contents into `.claude/agents/` (create the folder if it doesn't exist) so Claude Code picks them up as subagents, shared across all three project subfolders — e.g. from a terminal in this workspace: `mkdir -p .claude/agents && mv claude-agents/*.md .claude/agents/`. (They were placed outside `.claude/` because that folder can't be written to remotely.)

## Pipeline

For any non-trivial change, follow this order (staying inside the one project's folder the work is for — see `PROJECTS.md`):

1. **architect** — Turn the idea into a build plan. If it comes back with open questions, relay them to the user and wait for answers before continuing (don't guess on real ambiguity). Once the plan is settled, it's saved to `plans/<project-prefix>/<slug>.md`.
2. **coder** — Hand it the plan and let it implement.
3. **tester** — Hand it the plan + what the coder changed. It tries to break the work and reports findings; it does not fix anything.
4. If the tester finds failures worth fixing, send them back to **coder** to address, then re-run **tester** on the fix. Repeat until clean or until a failure needs a plan-level decision (back to **architect**).
5. **manager** — Once coder and tester are both settled, it cross-checks plan vs. implementation vs. test results and gives the final short report. Surface the manager's report to the user — that's the thing they actually see at the end, not a blow-by-blow of the other three agents.

For a trivial change (copy tweak, a color, a typo fix), skip the ceremony and just make the change — the pipeline is for anything where a bad guess is costly to redo.

Each agent's full job description lives in its own file under `.claude/agents/` (after the move above).

## Ilias's shift schedule

Fixed 14-day cycle, anchored on **Monday, September 14, 2026, 19:30** (Reykjavik time, UTC+0) — that's when his current work week's first shift started:

- **Work week:** starts Monday 19:30, one shift every night (19:30–07:30) through the following Monday morning 07:30 — 7 shift-nights: Mon, Tue, Wed, Thu, Fri, Sat, Sun evenings. Confirmed work weeks: Sep 14–21, 2026; Sep 28–Oct 5, 2026; and every 14 days from that anchor.
- **Off week:** starts the moment that Monday morning shift ends (07:30) and runs until the *following* Monday evening (19:30), when the next work week's first shift begins. No shift-nights at all during an off week.
- **To classify any date:** let `days = floor((date − 2026-09-14) / 7 days)` (weeks since the anchor Monday, using each week as Mon–Sun). If `days` is even, that week is a work week; if odd, it's an off week. During a work week, Ilias is generally away from Claude except roughly 2am–6am (shift downtime); during an off week he's around any time.

## Unattended runs

A scheduled run fires nightly at 22:00 Reykjavik time (mainly meant to land inside work-week shift-nights). Each firing must first classify tonight against the schedule above:

- **Work-week shift-night:** proceed — work through `PROJECTS.md`'s projects that have open work, running the pipeline above.
- **Off week:** there's no shift happening, Ilias may well be around — skip real work this pass. End with a brief, clearly non-actionable note (so it doesn't read as something needing his attention) rather than doing a full pipeline run.

When proceeding, in this mode:

- Nothing gets finalized without Ilias. Coder stages work on that project's branch (never `main`); nothing is merged, pushed, or treated as done.
- Manager's final report is what surfaces to Ilias (via a phone notification) — it leads with status, names the project and exact branch to review, and says plainly what does or doesn't need his input.
- Work stays scoped to one project's folder per commit — never mix two projects' changes together (see `PROJECTS.md`).

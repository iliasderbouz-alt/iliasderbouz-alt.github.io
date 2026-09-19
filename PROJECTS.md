# Ilias's Projects — Registry

The agent team (see `CLAUDE.md`) reads this file to know what it's overseeing. All three projects live as subfolders of this one workspace (`My Klaude Portfolio`), sharing one agent team. Update the status line whenever a project's state changes.

## 1. Personal CV website
- **Folder:** the workspace root itself (`My Klaude Portfolio/`) — its own files, not a subfolder
- **Status:** active — agent team set up, no build work started yet
- **Goal:** showcase work experience for job searching
- **Plan slug prefix:** `cv` — plans live at `plans/cv/<slug>.md`, unattended work stages on `auto-progress/cv`
- **Target:** part of a ~5-month timeline across all three projects

## 2. Self-sustaining Shopify store
- **Folder:** `Shopify project/`
- **Status:** active — folder connected, empty, ready for the Architect to scope a first plan
- **Goal:** a Shopify store that runs with minimal ongoing manual work
- **Plan slug prefix:** `shopify` — plans live at `plans/shopify/<slug>.md`, unattended work stages on `auto-progress/shopify`
- **Target:** part of the same ~5-month timeline

## 3. Night-shift life tracker (app)
- **Folder:** `Nightshift tracker app project/`
- **Status:** active — folder connected, empty, ready for the Architect to scope a first plan
- **Goal:** first app, built around Ilias's own night-shift routine — tracks sleep, energy, and workouts around irregular/night-shift schedules
- **Plan slug prefix:** `tracker` — plans live at `plans/tracker/<slug>.md`, unattended work stages on `auto-progress/tracker`
- **Target:** part of the same ~5-month timeline

## How the team should use this

- **Architect** checks here first when starting or resuming work, so it knows which project it's in, which subfolder its files belong under, and what's already true. It never writes outside that project's own folder (root files for the CV site; the matching subfolder for the other two).
- On an **unattended run**, the team works through whichever of the above projects have open work (an unfinished plan, a tester finding, or — with nothing in progress — the next sensible increment toward that project's stated goal), one project's work staying strictly inside that project's own folder and branch.
- All three are currently active/connected — none are skipped for lack of a folder anymore.

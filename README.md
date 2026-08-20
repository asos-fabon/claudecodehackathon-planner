# claudecodehackathon-planner

**Detour** — a bleisure (business + leisure) trip planner, built in Python.

This is a Flask rebuild of the ASOS "Detour" prototype. It plans Jo Karlsson's
Istanbul supplier trip (ref TR-4471): three locked work days across two mills,
three personal days added on, with a partner (Mara) travelling as a non-employee
guest. Everything is styled with the ASOS Thread design-system tokens.

## Sections

- **Trip** — hero overview, the calendar/Slack/policy signals the planner read, and the work blocks it planned around.
- **Itinerary** — all six days, in a **Timeline** or **Day board** layout.
- **Eat & see** — place cards filterable by Eat / See / Getting around, each linking out to Google Maps.
- **Companions** — who's on the trip and how each one changes billing and policy.
- **What to wear** — day-by-day outfits plus a one-cabin-bag pack list.
- **Policy & spend** — two separate ledgers (ASOS vs you) and the P-04 policy clauses that shaped the plan.
- **Agent chat panel** — a canned planner assistant on the right (quick replies + free text).

## Run it

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app/app.py
```

Then open http://127.0.0.1:5000.

## Layout

```
app/
  app.py          # Flask routes + /chat endpoint
  data.py         # all trip content, as Python data
  templates/      # base shell + one template per section
  static/_ds/     # ASOS Thread design-system CSS + fonts
```

The agent chat uses scripted replies (no external API), matching the original prototype.

"""Detour — a bleisure (business + leisure) trip planner.

A faithful Python/Flask rebuild of the ASOS "Detour" prototype. Renders Jo
Karlsson's Istanbul trip across six sections and a canned agent chat panel,
styled with the ASOS Thread design-system tokens copied under static/_ds.
"""
from flask import Flask, render_template, request, jsonify, session

import data

app = Flask(__name__)
# Session only holds the in-memory chat transcript for this demo; not sensitive.
app.secret_key = "detour-bleisure-planner-demo"

VALID_NAV = {n["key"] for n in data.NAV}
VALID_LAYOUTS = {"timeline", "board"}


def _base_context(nav):
    """Everything the shell (header, nav, chat panel) needs on every page."""
    if "messages" not in session:
        session["messages"] = list(data.INITIAL_MESSAGES)
    return {
        "ds": data.DS,
        "nav_items": data.NAV,
        "active_nav": nav,
        "messages": session["messages"],
        "quick_replies": data.QUICK_REPLIES,
        "show_connectors": True,
        "show_agent_panel": True,
    }


@app.route("/")
def home():
    return trip()


@app.route("/trip")
def trip():
    ctx = _base_context("trip")
    ctx.update(hero_stats=data.HERO_STATS, signals=data.SIGNALS, work_blocks=data.WORK_BLOCKS)
    return render_template("trip.html", **ctx)


@app.route("/itinerary")
def itinerary():
    layout = request.args.get("layout", "timeline")
    if layout not in VALID_LAYOUTS:
        layout = "timeline"
    ctx = _base_context("itinerary")
    ctx.update(days=data.DAYS, layout=layout)
    return render_template("itinerary.html", **ctx)


@app.route("/places")
def places():
    active_filter = request.args.get("filter", "All")
    if active_filter not in data.PLACE_FILTERS:
        active_filter = "All"
    if active_filter == "All":
        shown = data.PLACES
    else:
        shown = [p for p in data.PLACES if p["cat"] == active_filter]
    # Attach map/photo links per card.
    cards = [
        {**p, "maps_url": data.maps_url(p), "photos_url": data.photos_url(p)}
        for p in shown
    ]
    ctx = _base_context("places")
    ctx.update(places=cards, filters=data.PLACE_FILTERS, active_filter=active_filter)
    return render_template("places.html", **ctx)


@app.route("/people")
def people():
    ctx = _base_context("people")
    ctx.update(people=data.PEOPLE)
    return render_template("people.html", **ctx)


@app.route("/wardrobe")
def wardrobe():
    ctx = _base_context("wardrobe")
    ctx.update(outfits=data.OUTFITS, packing=data.PACKING)
    return render_template("wardrobe.html", **ctx)


@app.route("/expenses")
def expenses():
    ctx = _base_context("expenses")
    ctx.update(
        company_rows=data.COMPANY_ROWS, company_total=data.COMPANY_TOTAL,
        company_footnote=data.COMPANY_FOOTNOTE,
        personal_rows=data.PERSONAL_ROWS, personal_total=data.PERSONAL_TOTAL,
        personal_footnote=data.PERSONAL_FOOTNOTE,
        policy_items=data.POLICY_ITEMS,
    )
    return render_template("expenses.html", **ctx)


@app.route("/chat", methods=["POST"])
def chat():
    """Append the user's message and return the canned agent reply.

    Mirrors the prototype: a user turn, then a single scripted planner reply.
    """
    text = (request.json or {}).get("text", "").strip()
    if not text:
        return jsonify(error="empty message"), 400
    messages = session.get("messages", list(data.INITIAL_MESSAGES))
    messages.append({"from": "user", "text": text})
    reply = {"from": "agent", "text": data.AGENT_REPLY}
    messages.append(reply)
    session["messages"] = messages
    return jsonify(user={"from": "user", "text": text}, agent=reply)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)

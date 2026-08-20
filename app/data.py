"""All trip content for Detour, the bleisure trip planner.

Ported verbatim from the original ASOS "Detour - Bleisure Planner" prototype so
the Python app renders the same trip: Jo Karlsson's Istanbul supplier visit
(ref TR-4471) with three personal days tacked on.
"""

# --- Design-system asset path (copied under static/_ds) ------------------------
DS = "thread-design-system-asos-f4a64aae-1e56-44d1-a8d3-77cfb2f33ca4"

# --- Left navigation -----------------------------------------------------------
NAV = [
    {"key": "trip", "label": "Trip", "icon": "plane", "badge": None},
    {"key": "itinerary", "label": "Itinerary", "icon": "calendar-days", "badge": "6 days"},
    {"key": "places", "label": "Eat & see", "icon": "utensils", "badge": "12"},
    {"key": "people", "label": "Companions", "icon": "users", "badge": "4"},
    {"key": "wardrobe", "label": "What to wear", "icon": "shirt", "badge": None},
    {"key": "expenses", "label": "Policy & spend", "icon": "receipt", "badge": "2"},
]

# --- Trip overview -------------------------------------------------------------
HERO_STATS = [
    {"value": "3", "label": "Work days"},
    {"value": "3", "label": "Yours"},
    {"value": "£1,142", "label": "On ASOS"},
    {"value": "£486", "label": "On you"},
]

SIGNALS = [
    {"icon": "calendar", "source": "Outlook", "title": "Two mill visits, three days",
     "body": "Bahariye Mensucat Monday 14:00, Merter fittings all Tuesday, joint wrap-up Wednesday until 15:30. Nothing after that."},
    {"icon": "message-square", "source": "Slack", "title": "Mara is coming",
     "body": "“Mara might fly out Tuesday night if I stay the weekend” — #travel-chat, 12 Aug. I treated her as a non-employee guest."},
    {"icon": "file-text", "source": "Workday", "title": "Policy P-04 applies",
     "body": "Up to 3 personal nights, room-sharing allowed at no company cost, £55 per head on client entertainment, rail before taxi."},
    {"icon": "credit-card", "source": "Concur", "title": "£160 room cap, £22 meals",
     "body": "Your Karaköy hotel is £138 a night, so the two personal nights price at £96 with the leisure rate."},
    {"icon": "mail", "source": "Email", "title": "Kerem offered dinner Monday",
     "body": "“Happy to host you the first evening” — I declined politely and put ASOS on the bill instead, which keeps the audit simple."},
    {"icon": "users", "source": "Directory", "title": "Priya approves your travel",
     "body": "She clears requests in about a day, so submitting today leaves room before the fare changes."},
]

WORK_BLOCKS = [
    {"day": "Mon 31", "time": "14:00 — 17:00", "title": "Bahariye Mensucat mill walk",
     "detail": "Zeytinburnu · AW27 denim lots with Kerem Aydın", "lock": "From Outlook"},
    {"day": "Tue 01", "time": "09:30 — 16:30", "title": "Merter knitwear fittings",
     "detail": "Merter · full-day fit session with Deniz Yılmaz", "lock": "From Outlook"},
    {"day": "Wed 02", "time": "09:00 — 12:00", "title": "Osmanbey fabric market",
     "detail": "Şişli · trims and linings sourcing", "lock": "From Outlook"},
    {"day": "Wed 02", "time": "13:30 — 15:30", "title": "Joint wrap-up, both mills",
     "detail": "Merter · last work commitment of the trip", "lock": "From Outlook"},
]

# --- Itinerary: six days -------------------------------------------------------
# tone -> one of company | personal | approval | locked (drives the policy chip)
DAYS = [
    {
        "dayName": "Mon", "dayNum": "31", "mode": "Work · you alone", "weather": "30° · dry",
        "items": [
            {"time": "06:15", "dur": "4h 05m", "title": "LGW → IST", "place": "Pegasus PC1052, economy",
             "note": "Cheapest fare in policy; lands 12:40 local, an hour before your first mill slot.",
             "policy": "ASOS pays", "tone": "company", "cost": "£214",
             "transport": "M11 metro to Gayrettepe, 35 min", "who": None},
            {"time": "14:00", "dur": "3h", "title": "Bahariye Mensucat — mill walk", "place": "Zeytinburnu",
             "note": "Kerem has the AW27 denim lots laid out. Fixed in your calendar.",
             "policy": "Work · locked", "tone": "locked", "cost": "—",
             "who": "Kerem Aydın", "transport": None},
            {"time": "19:30", "dur": "2h 30m", "title": "Supplier dinner", "place": "Karaköy Lokantası",
             "note": "Old-school meyhane, easy for a first evening and forgiving of a late finish at the mill.",
             "policy": "Needs approval · £61pp vs £55 cap", "tone": "approval", "cost": "£183",
             "who": "You + 2 suppliers", "transport": None},
        ],
    },
    {
        "dayName": "Tue", "dayNum": "01", "mode": "Work · Mara lands tonight", "weather": "29° · humid",
        "items": [
            {"time": "08:00", "dur": "45m", "title": "Breakfast before the tram", "place": "Van Kahvaltı Evi, Cihangir",
             "note": "Ten minutes from the hotel, open early, and you'll want the protein before a full mill day.",
             "policy": "ASOS pays · per diem", "tone": "company", "cost": "£11", "who": None, "transport": None},
            {"time": "09:30", "dur": "7h", "title": "Merter knitwear studio — fittings", "place": "Merter",
             "note": "Full day of fit sessions with Deniz. Locked.",
             "policy": "Work · locked", "tone": "locked", "cost": "—", "who": "Deniz Yılmaz", "transport": None},
            {"time": "18:00", "dur": "1h 30m", "title": "Nothing planned — deliberately", "place": "Hotel, Karaköy",
             "note": "You'll have been on your feet nine hours and Mara lands at 21:05. I left this empty.",
             "policy": "Your time", "tone": "personal", "cost": "—", "who": None, "transport": None},
            {"time": "21:05", "dur": "1h", "title": "Meet Mara at arrivals", "place": "IST Terminal",
             "note": "Havaist bus is £6 and runs all night; a taxi at that hour is £34 and no faster.",
             "policy": "You pay", "tone": "personal", "cost": "£12", "who": None, "transport": "Havaist, 55 min"},
        ],
    },
    {
        "dayName": "Wed", "dayNum": "02", "mode": "Work until 15:30, then yours", "weather": "29° · clear",
        "items": [
            {"time": "09:00", "dur": "3h", "title": "Osmanbey fabric market", "place": "Şişli",
             "note": "Trim and lining sourcing. Bring the swatch folder.",
             "policy": "Work · locked", "tone": "locked", "cost": "—", "who": None, "transport": None},
            {"time": "13:30", "dur": "2h", "title": "Wrap-up with both mills", "place": "Merter",
             "note": "Your last work commitment of the trip. Ends 15:30.",
             "policy": "Work · locked", "tone": "locked", "cost": "—", "who": "Kerem + Deniz", "transport": None},
            {"time": "17:00", "dur": "2h", "title": "Bosphorus ferry, Eminönü → Üsküdar", "place": "and back at golden hour",
             "note": "The cheapest beautiful thing in the city and the right way to hand the trip over to Mara.",
             "policy": "You pay", "tone": "personal", "cost": "£3", "who": None, "transport": "Istanbulkart, £1.50 each"},
            {"time": "20:00", "dur": "2h 30m", "title": "Dinner, just you two", "place": "Neolokal, Salt Galata",
             "note": "Anatolian tasting menu in a bank building; book now, it goes three weeks out.",
             "policy": "You pay", "tone": "personal", "cost": "£96", "who": None, "transport": None},
        ],
    },
    {
        "dayName": "Thu", "dayNum": "03", "mode": "Added day · with Mara", "weather": "27° · shower pm",
        "items": [
            {"time": "09:30", "dur": "3h 30m", "title": "Sultanahmet on foot", "place": "Hagia Sophia, Cistern, Blue Mosque",
             "note": "Timed entry booked for 09:45 to beat the coaches. Cover shoulders and knees; scarf for the mosque.",
             "policy": "You pay", "tone": "personal", "cost": "£58", "who": None, "transport": None},
            {"time": "13:30", "dur": "1h 30m", "title": "Lunch in the Grand Bazaar", "place": "Şark Kahvesi",
             "note": "Inside the bazaar so the afternoon shower doesn't matter.",
             "policy": "You pay", "tone": "personal", "cost": "£24", "who": None, "transport": None},
            {"time": "16:00", "dur": "2h", "title": "Çemberlitaş hamam", "place": "1584, Sinan-built",
             "note": "Wet-weather plan and the best possible answer to three days on mill floors.",
             "policy": "You pay", "tone": "personal", "cost": "£78", "who": None, "transport": None},
            {"time": "20:00", "dur": "2h", "title": "Meyhane crawl, small plates", "place": "Asmalımescit",
             "note": "Loud, late, no booking needed — good for a night with no alarm after it.",
             "policy": "You pay", "tone": "personal", "cost": "£42", "who": None, "transport": None},
        ],
    },
    {
        "dayName": "Fri", "dayNum": "04", "mode": "Added day · Asian side", "weather": "28° · clear",
        "items": [
            {"time": "10:00", "dur": "30m", "title": "Ferry to Kadıköy", "place": "from Karaköy",
             "note": "Twenty minutes across the water and suddenly it's a different city.",
             "policy": "You pay", "tone": "personal", "cost": "£2", "who": None, "transport": "Istanbulkart"},
            {"time": "10:30", "dur": "2h 30m", "title": "Kadıköy market and Moda seafront", "place": "Kadıköy",
             "note": "Fish market, pickle shops, the coffee you'll talk about at home.",
             "policy": "You pay", "tone": "personal", "cost": "£18", "who": None, "transport": None},
            {"time": "13:30", "dur": "2h", "title": "Lunch at Çiya Sofrası", "place": "Kadıköy",
             "note": "Regional Anatolian home cooking. Worth planning a day around.",
             "policy": "You pay", "tone": "personal", "cost": "£36", "who": None, "transport": None},
            {"time": "16:30", "dur": "3h", "title": "Balat, slowly", "place": "Fener & Balat",
             "note": "Painted houses, antique shops, no itinerary. Ferry back at dusk.",
             "policy": "You pay", "tone": "personal", "cost": "£14", "who": None, "transport": None},
        ],
    },
    {
        "dayName": "Sat", "dayNum": "05", "mode": "Slow morning, then home", "weather": "29° · clear",
        "items": [
            {"time": "09:00", "dur": "2h", "title": "Breakfast and Karaköy Güllüoğlu", "place": "Karaköy",
             "note": "Baklava for the team. Boxed, sealed, survives the flight.",
             "policy": "You pay", "tone": "personal", "cost": "£26", "who": None, "transport": None},
            {"time": "12:00", "dur": "—", "title": "Late checkout", "place": "Hotel, Karaköy",
             "note": "Two extra hours so you're not sitting in a lobby with bags.",
             "policy": "Needs approval · £34", "tone": "approval", "cost": "£34", "who": None, "transport": None},
            {"time": "16:20", "dur": "4h 20m", "title": "IST → LGW", "place": "Pegasus PC1051",
             "note": "£58 cheaper than the Wednesday evening flight you'd otherwise have taken.",
             "policy": "ASOS pays", "tone": "company", "cost": "£186", "who": None, "transport": "M11 metro, 40 min"},
        ],
    },
]

# --- Places (Eat & see) --------------------------------------------------------
PLACES = [
    {"kind": "Supplier dinner", "name": "Karaköy Lokantası", "area": "Karaköy · 8 min from hotel", "price": "£61pp", "cat": "Eat",
     "why": "Meyhane cooking that suits a table of mill contacts: everything shared, no menu theatre, and they hold a table past 21:00 when a mill visit overruns.",
     "who": "You, Kerem Aydın, Deniz Yılmaz", "transport": "Walk 8 min from hotel", "transportIcon": "footprints",
     "policy": "£6 over the £55 cap — I've drafted the approval note", "cta": "Book & request approval", "ctaType": "primary"},
    {"kind": "Dinner, you two", "name": "Neolokal", "area": "Salt Galata · Wed 20:00", "price": "£48pp", "cat": "Eat",
     "why": "Anatolian tasting menu in the old Ottoman bank, with the Golden Horn out of the window. The right marker for the moment work ends and the trip becomes yours.",
     "who": "You and Mara", "transport": "Walk 6 min from the ferry", "transportIcon": "footprints",
     "policy": "Your card — Mara is not an employee", "cta": "Book for two", "ctaType": "accent"},
    {"kind": "Breakfast", "name": "Van Kahvaltı Evi", "area": "Cihangir · opens 07:30", "price": "£11pp", "cat": "Eat",
     "why": "A proper Van breakfast spread before a seven-hour fitting day. Ten minutes from the hotel and fast if you arrive before 08:15.",
     "who": "You, Mon–Wed", "transport": "Tram F1 + 4 min walk", "transportIcon": "train-front",
     "policy": "Inside your £22 daily meal allowance", "cta": "Add to all work days", "ctaType": "secondary"},
    {"kind": "Half day", "name": "Sultanahmet, timed entry", "area": "Fatih · Thu 09:45", "price": "£29pp", "cat": "See",
     "why": "Hagia Sophia, the Cistern and the Blue Mosque in one walk if you start before the coach groups. Booked at 09:45 for exactly that reason.",
     "who": "You and Mara", "transport": "Tram T1 from Karaköy, 12 min", "transportIcon": "train-front",
     "policy": "Your card · personal day", "cta": "Hold 09:45 slot", "ctaType": "accent"},
    {"kind": "Afternoon", "name": "Çemberlitaş hamam", "area": "Fatih · Thu 16:00", "price": "£39pp", "cat": "See",
     "why": "Built 1584, still working. It's also your wet-weather cover for Thursday's forecast shower and the best cure for three days of concrete mill floors.",
     "who": "You and Mara", "transport": "Tram T1, 3 min", "transportIcon": "train-front",
     "policy": "Your card · personal day", "cta": "Book two", "ctaType": "secondary"},
    {"kind": "Full day", "name": "Kadıköy & the Asian side", "area": "Fri · ferry from Karaköy", "price": "£2 travel", "cat": "See",
     "why": "Market, seafront, and a long lunch at Çiya Sofrası. A twenty-minute ferry buys you a completely different city, and it costs almost nothing.",
     "who": "You and Mara", "transport": "Şehir Hatları ferry, 20 min", "transportIcon": "ship",
     "policy": "Istanbulkart covers both of you", "cta": "Add to Friday", "ctaType": "secondary"},
    {"kind": "Getting around", "name": "Istanbulkart, two cards", "area": "Airport pickup", "price": "£16 loaded", "cat": "Getting around",
     "why": "Metro, tram, ferry and funicular on one card, at a fraction of taxi fares. Policy wants rail-first anyway, so this covers work and leisure days alike.",
     "who": "You and Mara", "transport": "Collect at IST arrivals", "transportIcon": "credit-card",
     "policy": "Work portion claimable · split at export", "cta": "Order two cards", "ctaType": "primary"},
    {"kind": "Take home", "name": "Karaköy Güllüoğlu", "area": "Karaköy · Sat 09:30", "price": "£26", "cat": "Eat",
     "why": "Baklava for the studio, boxed and sealed so it survives the flight. Six minutes from the hotel on your way out.",
     "who": "For the team", "transport": "Walk 6 min", "transportIcon": "footprints",
     "policy": "Team gift — claimable up to £30", "cta": "Add to Saturday", "ctaType": "secondary"},
]

PLACE_FILTERS = ["All", "Eat", "See", "Getting around"]

# --- Companions ----------------------------------------------------------------
PEOPLE = [
    {"initials": "JK", "name": "Jo Karlsson", "tag": "You · employee", "tone": "ink",
     "role": "Designer, Womenswear. Travelling on ref TR-4471 under policy P-04.",
     "billing": "ASOS · work days", "billingNote": "Flights, hotel Mon–Wed, meals to £22 a day, rail travel.",
     "notes": ["Three days of mill visits, then three personal days you're funding yourself.",
               "Your line manager Priya clears the two flagged items."]},
    {"initials": "M", "name": "Mara Lindqvist", "tag": "Guest · not an ASOS employee", "tone": "warn",
     "role": "Your partner. Arrives Tue 1 Sep, 21:05. Flies home with you Saturday.",
     "billing": "You · in full", "billingNote": "Her flight, her share of everything after Wednesday 15:30, and both leisure nights.",
     "notes": ["Sharing your booked room — allowed under P-04 §6 at no cost to the company.",
               "I've kept her name off every company-billed line so expenses reconcile cleanly.",
               "Not covered by ASOS travel insurance — I've flagged a personal policy for you to buy."]},
    {"initials": "KA", "name": "Kerem Aydın", "tag": "Supplier", "tone": "ink",
     "role": "Production manager, Bahariye Mensucat. Host of Monday's mill walk.",
     "billing": "ASOS · entertainment", "billingNote": "Monday dinner, £61 a head — above cap, approval drafted.",
     "notes": ["Offered to host dinner himself; I declined on your behalf to keep the gift register clean.",
               "Attends Wednesday's joint wrap-up too."]},
    {"initials": "DY", "name": "Deniz Yılmaz", "tag": "Supplier", "tone": "ink",
     "role": "Studio lead, Merter knitwear. Tuesday's fittings and Wednesday's wrap-up.",
     "billing": "ASOS · entertainment", "billingNote": "Included in Monday's dinner cover.",
     "notes": ["Vegetarian — Karaköy Lokantası has the mezze range to handle it without a special order.",
               "Asked for the tech pack by Friday; I've held 20 minutes Thursday morning in case."]},
]

# --- Wardrobe ------------------------------------------------------------------
OUTFITS = [
    {"dayName": "Mon", "dayNum": "31", "temp": "30° dry", "headline": "Travel light, arrive presentable", "tone": "work",
     "detail": "Linen-blend trousers and a short-sleeve shirt you can wear from Gatwick straight onto the mill floor.",
     "because": "No hotel stop between landing and Bahariye — you go with what you're wearing.",
     "pieces": ["Linen trousers", "Cotton shirt", "Closed-toe flats", "Light knit for the flight"]},
    {"dayName": "Tue", "dayNum": "01", "temp": "29° humid", "headline": "A full day standing in a studio", "tone": "work",
     "detail": "Breathable dark trousers, sleeveless top with a shirt over it, and the flats again. Nothing pale.",
     "because": "Seven hours of fittings, chalk dust and steam. Dark fabric forgives all three.",
     "pieces": ["Dark trousers", "Sleeveless top", "Overshirt", "Flats"]},
    {"dayName": "Wed", "dayNum": "02", "temp": "29° clear", "headline": "Works for the market and for Neolokal", "tone": "work",
     "detail": "One dress that reads professional at 09:00 and holds up at a tasting menu at 20:00, with flats swapped for sandals.",
     "because": "You go from Osmanbey to dinner with no time to change. One outfit, two shoes.",
     "pieces": ["Midi dress", "Flats → sandals", "Linen jacket", "Small bag"]},
    {"dayName": "Thu", "dayNum": "03", "temp": "27° shower pm", "headline": "Covered, cool, and rain-ready", "tone": "free",
     "detail": "Wide trousers and a long-sleeve linen shirt; scarf in the bag for the mosque. Shoes you can slip off at the door.",
     "because": "Working mosques ask for covered shoulders and knees, and heads covered for women. Slip-on shoes save queueing.",
     "pieces": ["Wide trousers", "Linen shirt", "Light scarf", "Slip-on shoes", "Packable rain shell"]},
    {"dayName": "Fri", "dayNum": "04", "temp": "28° clear", "headline": "Ferries, markets, twelve thousand steps", "tone": "free",
     "detail": "Shorts or a cotton skirt, a t-shirt, and the most broken-in shoes you own.",
     "because": "Kadıköy and Balat are hills and cobbles, and you'll be out from 10:00 until dark.",
     "pieces": ["Cotton skirt", "T-shirt", "Trainers", "Cap", "Cross-body bag"]},
    {"dayName": "Sat", "dayNum": "05", "temp": "29° clear", "headline": "Airport-comfortable", "tone": "free",
     "detail": "Whatever you can sit in for four and a half hours. Layer for the plane's air conditioning.",
     "because": "Late checkout at 12:00, flight at 16:20 — you're in these clothes for eight hours.",
     "pieces": ["Soft trousers", "Tee", "Trainers", "Cardigan"]},
]

PACKING = [
    {"group": "Work days", "items": ["2 pairs breathable trousers", "3 shirts, one sleeveless top",
                                       "Closed-toe flats", "Swatch folder + tape measure", "Business cards"]},
    {"group": "Free days", "items": ["Cotton skirt or shorts", "Long-sleeve linen shirt", "Light scarf",
                                       "Trainers and sandals", "Packable rain shell", "Swimwear for the hamam"]},
    {"group": "Don't forget", "items": ["Type F plug adapter", "Istanbulkart (collect at IST)",
                                          "Personal travel insurance for Mara", "Refillable bottle", "Space for baklava"]},
]

# --- Expenses ------------------------------------------------------------------
# Rows are (label, amount) or (label, amount, "accent") to highlight.
COMPANY_ROWS = [
    ("Flights, LGW → IST → LGW", "£400"),
    ("Hotel, Karaköy · 3 nights", "£414"),
    ("Meals, per diem · 3 days", "£66"),
    ("Rail, tram & ferry", "£18"),
    ("Supplier dinner · 3 covers", "£183"),
    ("Team baklava", "£26"),
    ("Late checkout · pending", "£34"),
]
COMPANY_TOTAL = "£1,142"
COMPANY_FOOTNOTE = "Within P-04 for a three-day supplier visit. Two lines await approval."

PERSONAL_ROWS = [
    ("Mara's flight", "£198"),
    ("Hotel, 2 leisure nights", "£192", "accent"),
    ("Dinner at Neolokal, two", "£96"),
    ("Sultanahmet timed entry, two", "£58"),
    ("Hamam, two", "£78"),
    ("Meals & travel, Thu–Sat", "£146"),
    ("Leisure-rate saving applied", "−£282", "accent"),
]
PERSONAL_TOTAL = "£486"
PERSONAL_FOOTNOTE = "Split across you and Mara. Deducted from nothing — this is your own card."

POLICY_ITEMS = [
    {"title": "Personal extension — P-04 §4",
     "content": "Up to three consecutive personal nights on a business trip, provided the outbound and return flights stay within the cheapest reasonable fare band. Yours do: the Saturday return is £58 cheaper than the Wednesday one, so the extension reduces company cost."},
    {"title": "Non-employee companions — P-04 §6",
     "content": "Family and partners may accompany you and share a booked room at no additional cost to ASOS. Their travel, meals and activities are personal expenditure. They are not covered by the company travel insurance policy — arrange your own."},
    {"title": "Client and supplier entertainment — P-04 §9",
     "content": "£55 per head including alcohol, receipts itemised, attendees named. Above cap requires line-manager approval before the booking is made. Monday's dinner is £61 a head; the approval note is drafted and awaiting your send."},
    {"title": "Ground transport — P-04 §11",
     "content": "Rail, metro, tram and ferry before taxi. Taxis permitted after 22:00 or with luggage over 20kg. Tuesday's 21:05 airport pickup uses the Havaist bus at £12 for two rather than a £34 taxi."},
]

# --- Agent chat panel ----------------------------------------------------------
INITIAL_MESSAGES = [
    {"from": "agent", "text": "Morning Jo. Outlook has you in Istanbul Monday to Wednesday for Bahariye and Merter — I've read the meeting invites, so I know your last commitment ends 15:30 Wednesday."},
    {"from": "agent", "text": "You mentioned Mara in Slack. I've added her from Tuesday 21:05 and kept everything she's part of on a separate ledger, per P-04."},
    {"from": "user", "text": "Keep Thursday relaxed, we'll both be tired"},
    {"from": "agent", "text": "Done — Thursday is one neighbourhood, a long lunch and a hamam. There's a shower forecast after 15:00, so the hamam is also the indoor plan."},
]

QUICK_REPLIES = [
    "Swap Thursday for a food tour",
    "Mara can't do early starts",
    "Keep me under £400 personally",
]

# Canned agent reply, matching the prototype's scripted response.
AGENT_REPLY = ("Noted. I've reworked that day and re-checked it against P-04 — "
               "the itinerary on the left is updated, and nothing has crossed a cap.")


def maps_url(place):
    """Google Maps search link for a place card (opens in a new tab)."""
    from urllib.parse import quote
    area = place["area"].split(" · ")[0]
    q = quote(f"{place['name']}, {area}, Istanbul")
    return f"https://www.google.com/maps/search/?api=1&query={q}"


def photos_url(place):
    """Google Images link for a place card."""
    from urllib.parse import quote
    area = place["area"].split(" · ")[0]
    q = quote(f"{place['name']}, {area}, Istanbul")
    return f"https://www.google.com/search?tbm=isch&q={q}"

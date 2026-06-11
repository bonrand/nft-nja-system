# CLAUDE.md — NFT/NJA Brand & Flyer Production System

This repo is the design/content production system for two connected Nosara tourism brands.
Owner: Brandon Vargas (returns to Nosara in November 2026; operating partner on the ground: Yerly).
Purpose: produce sellable, WhatsApp-ready visual assets and copy — fast, consistent, editable.

**This is a sales tool, not a software project. Never overengineer.**

---

## The two brands

**NFT — Nosara Fun Travel** · the trusted local front door.
"Friendly local help for transportation, tours and guest experiences in Nosara."
Warm, direct, fast, WhatsApp-first. Serves tourists, Airbnb guests, hosts, property managers.

**NJA — Nosara Jungle Adventures** · the premium experience line.
"Private jungle experiences in Nosara, curated by locals."
Calm, luminous, editorial, sensory. ATV/UTV, waterfalls, turtle arribada, coffee tours.

NFT brings people in. NJA gives them the upgrade. Same family, two voices.
Bridge line when needed: "Nosara Fun Travel connects you with the best local transportation
and private experiences. Nosara Jungle Adventures is our curated adventure side."

---

## Design system

Palette (CSS variables live in `templates/styles.css` — single source of truth):
- Canvas warm cream `#F7F1E6` · Primary deep jungle `#234D38` · Teal water `#2E8C84`
- Golden sun `#DFA53B` · Clay earth `#BD6B45` · Ink `#1C3A2C`

Type: **Fraunces** (display serif) + **Hanken Grotesk** (body).
Canva substitutes: Playfair Display / DM Serif + Mulish.

Flyer layout DNA (public pieces): 1080×1350 (4:5). Hero photo top ~57%, warm cream
content area ~43%. Small brand mark top-left, thin badge top-right, serif headline on hero,
one short description, 2–3 rounded chips, large serif price, green WhatsApp pill CTA,
footer with wa.me link + "Nosara, Costa Rica".

Rules:
- Light, tropical, luminous. NO dark/black backgrounds on public NJA flyers.
  (Exception: the private quote flyer may use an elegant deep-green/gold detail panel.)
- Real photos lead. Photos live in `assets/photos/`; flyers reference them by filename.
- One hook, one photo, one price, one CTA per piece. Minimal text. Thin-line icons, few.
- Never look like a cheap tour-desk flyer or a generic AI image.

## Voice

English first (USA/Canada clients). Natural, like a friendly local with great English —
never stiff translated Spanish, never corporate travel-agency tone, never hype.

NJA: premium, calm, sensory. CTAs: "Book on WhatsApp", "Check dates", "Let's plan it together".
NFT: useful, close, human, direct. CTAs: "Message us", "Send your dates", "Plan your stay".
"Pura vida" is welcome; walls of emojis are not.
Banned words unless Brandon asks: cheap, best prices, discount.

---

## Data integrity (critical)

All prices/details live in `data/services.json`. Confirmed facts only.
Anything unconfirmed is marked `"CONFIRM:<what>"` and rendered as a visible
[placeholder] on flyers. NEVER invent durations, inclusions, policies, or prices.
Never guarantee nature (turtle arribada depends on tides/natural cycle — frame respectfully).

Confirmed today:
- ATV Kymco 250cc — $80/day (CONFIRM: riders 1–2, helmets, gas, delivery)
- Turtle Arribada Ostional — $75/person, min 2 (CONFIRM: timing window, operator)
- Coffee Tour by UTV — private, up to 4, $520 (CONFIRM: duration, inclusions)
- Waterfall/Jungle Ride — CONFIRM: price
- Transportation (NFT): Local Nosara $60 · Garza $80 · Ostional/Sámara/San Juanillo $120 ·
  Liberia/Tamarindo $160 · Las Catalinas $180 · Monteverde $350 · La Fortuna $380 ·
  SJO/Santa Teresa/Jacó $400
- Vehicles: Mitsubishi Montero 2021 (1–4 pax) · Foton van (up to 16 pax).
  AC, luggage, surfboards, car seat on request (CONFIRM per booking).
- WhatsApp number: CONFIRM (one shared or one per brand?)

On general flyers, do NOT dump the full route list — that's only for the rate sheet.
General flyers push the WhatsApp inquiry.

---

## Repo structure

- `data/services.json` — all prices, routes, vehicles, placeholders. Single data file.
- `templates/styles.css` — shared palette/type/layout. Change brand here, everywhere updates.
- `templates/flyer-*.html` — one readable HTML per piece. No hidden logic, comments welcome.
- `scripts/export.js` — Puppeteer export: every template → PNG at 1080×1350
  into `exports/whatsapp/`; `--story` flag → 1080×1920 into `exports/instagram/`.
- `assets/photos/` — Brandon's real photos. `docs/` — brand system + WhatsApp playbook.
- `TODO.md` — living backlog. Update it at the end of every working session.

## Definition of done (a flyer is finished when):

1. Renders pixel-perfect at 1080×1350 via `npm run export`.
2. Zero unmarked placeholders (unconfirmed = visible [brackets]).
3. Copy is natural English, follows the brand voice, one CTA.
4. Real photo in place (or clearly marked photo slot).
5. PNG exists in `exports/whatsapp/`.

---

## Working style (how to behave in this repo)

1. Before changing a file: say what works, what's weak, then propose, then edit.
2. Never rewrite everything without explaining why. Keep Brandon oriented.
3. Simple HTML/CSS/JS. No frameworks without a clear reason. Readable, commented code.
4. Brandon is learning Claude Code: explain commands you run the first time you use them.
5. One file at a time. Small commits with clear messages.
6. End every session by updating TODO.md with done / next / blocked-on-Brandon.

## Asset priorities

1. Flyer system (6 existing pieces, production-ready) + export script.
2. Quote flyer (client name, route/experience, date, pax, vehicle, inclusions, price, CTA).
3. Property manager / Airbnb host one-pager service sheet.
4. Rate sheet (full transport route list, NFT).
5. Instagram carousels (5-slide structure: hook → sensory → details → price → soft CTA).
6. Story variants (1080×1920) of existing flyers.

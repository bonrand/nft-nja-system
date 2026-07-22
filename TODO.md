# TODO — living backlog

Updated: 2026-07-22 (session: quote flyer added)

## ✅ Done

- Repo bootstrapped: CLAUDE.md brief, folder structure, .gitignore
- `data/services.json` — all confirmed prices + explicit CONFIRM markers
- `templates/styles.css` — palette, Fraunces/Hanken Grotesk, 4:5 flyer layout DNA, plus `.quote-panel`/`.cta-gold` for the private quote flyer
- 8 flyer templates: NJA ATV, turtle arribada, coffee tour, waterfall, Guaitil pottery (draft) · NFT transport, general · private quote flyer
- `scripts/export.js` + `npm run export` (1080×1350) and `npm run export:story` (1080×1920) — verified working for all 8 pieces, both formats
- WhatsApp number confirmed (+506 8948 5335, Yerly, shared NFT/NJA) — updated in `data/services.json` and every flyer footer
- Real photos in place for 5 flyers: `atv-hero.jpg`, `coffee-hero.jpg`, `turtle-hero.jpg`, `transport-hero.jpg`, `guaitil-hero.jpg` — `.photo-slot` placeholders removed, all re-exported and checked
- `templates/flyer-quote.html` — one-off editable document per booking: client name, date, guests, vehicle, inclusions, price, WhatsApp CTA. Deep-green/gold panel (the one piece allowed a dark background — it's a private 1:1 send, not a feed post). Shorter hero (40%) than public flyers so the detail rows fit without pushing the footer off-canvas.
- `docs/brand-system.md` + `docs/whatsapp-playbook.md`

## ▶ Next

- [ ] Still need real photos for: waterfall/jungle ride flyer, NFT general flyer (`nosara-general.jpg`)
- [ ] Quote flyer story variant (1080×1920) has a large empty gap mid-panel — low priority, revisit if story quotes are actually needed
- [ ] Property manager / Airbnb host one-pager service sheet
- [ ] Rate sheet with the full NFT transport route list
- [ ] Instagram carousel structure (hook → sensory → details → price → soft CTA)
- [ ] Real WhatsApp icon in the CTA pill (currently a simple gold dot)

## 🔒 Blocked on Brandon

- [ ] Guaitil Pottery Tour: **price, duration/schedule, operator** — flyer is marked DRAFT and must stay out of client-facing sends until these are confirmed
- [ ] ATV: riders 1–2? helmets, gas, delivery included?
- [ ] Turtle arribada: timing window + operator
- [ ] Coffee tour: duration + inclusions
- [ ] Waterfall/Jungle Ride: **price**, duration, inclusions
- [ ] Car seat policy (per booking?)

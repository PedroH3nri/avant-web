---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["index.html"]
---

Scope: the Avant MVP panel prototype (login, invite, create Empresa, home, team, GAM networks, connect wizard, settings, Groone internal clients). Visitor mode: Operate.

Audience and job: publisher owners and their teams set up their Empresa, team seats and GAM connection; Groone staff manage clients.

Constraints: PT/EN/ES; staff limit per client; accent colour per Empresa; synthetic data labeled as examples; production is Vue 3.

## Direction contract

THESIS: The category standard, played straight at Vercel's craft level (owner's pick on 2026-10-22, reference: Vercel dashboard). Refuses the generic grey admin with a blue sidebar and soft cards that the first prototype shipped.

OWN-WORLD: Near-monochrome Geist world: white work surface over a #FAFAFA body band, hairline gray borders, black primary buttons (white in dark), blue only for links and focus, status as colored dot plus word. Geist Sans for all UI, Geist Mono for network codes and the service-account email. 6px controls, 8px cards, muted card footers holding the note and the action.

STORY: The owner sees who is in, how many seats are used against the Groone limit, and whether every network is connected, then acts in place.

FIRST VIEWPORT: Header with mark, slash, company switcher with "Rede Groone" badge, language and avatar; underline tab bar; page header band with 32px title; then the invite card with footer action, the seat usage bar, and the members table.

FORM: Category canon (standing exit), chosen over the dealt Azulejo direction and the Brazilian-modernism pick. seed: 7873b398aa79c28f. Signature: seat usage drawn as one segment per seat, reused as a strip in the internal clients table.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

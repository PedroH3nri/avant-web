# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Production: Vue 3 SPA (Vite, Vue Router, Pinia) over a Python/FastAPI API. This folder is a review prototype built in React + Tailwind + shadcn/ui so it can be shared as a single page; its visual decisions carry over to the Vue build, its code does not.

## Users

- Primary: owners of websites (blogs, portals, niche content sites, mostly Brazilian, also Spanish- and English-speaking) who monetize their traffic with AdSense / Google Ad Manager, and the small teams around them: traffic managers, finance, marketing.
- Internal: the Groone LLC team (Admin, Comercial, Marketing) that onboards clients, sets each client's staff limit, and links Ad Manager networks to clients.
- Job: run the company's ad-monetization operation in one place: who on the team can see and do what, which GAM networks and sites are connected, and later the revenue numbers.

## Product Purpose

Avant (Groone Avant) is the SaaS successor to Groone's internal tool "Genius". It includes every Genius feature, improved, and adds company and team management. Success for the MVP: a client accepts an invite, creates their Empresa, invites their team with roles, and gets their GAM network connected and their sites imported without talking to Groone support.

## Positioning

Built by the ad-ops company that already manages these publishers' Ad Manager networks under MCM. A client that accepts the Groone MCM contract is connected automatically; others connect by adding one Groone service account as administrator. Free for Groone network clients, paid for others (pricing still under discussion).

## Operating Context

- Terms of art the users know: AdSense, Google Ad Manager (GAM), network code (numeric, e.g. 21987654321), MCM (Multiple Customer Management) contract, ad units, site approval status, service account.
- Clients work at a desk, during business hours, often switching between GAM, AdSense and spreadsheets.
- One person can belong to several Empresas; the company switcher matters.
- Panel languages from the MVP: Portuguese, English, Spanish.

## Capabilities and Constraints

- MVP scope: (1) account and team: login (email + password, Google login after the invite is accepted), invite by email valid for 1 day, one Empresa per client, predefined roles (Gestor de tráfego, Financeiro, Marketing) plus custom roles, staff limit per client set by Groone, owner changeable only from the internal panel; (2) GAM connection: MCM auto-connect or service-account guide with "Testar conexão", sites and ad units imported automatically.
- Internal Groone panel: all clients, owner, MCM network, staff limit, status, create client.
- Customization in the MVP: dashboards, cards and system colors (accent color per Empresa).
- Deferred: per-role permission matrix, metrics sync, dashboards content, price rules, billing, G-Tag.

## Brand Commitments

- Name: Avant, provisional, shown as "Avant by Groone". Not trademark-checked yet.
- Groone's company value is growth ("crescer").
- The current Groone identity (navy "groone" wordmark with an arrow-shaped G) is explicitly NOT binding: the owner finds it ugly and wants it rethought.
- The owner rejected the first prototype as generic "AI slop".
- Standing preference (2026-10-22): the owner chose the category standard, played straight and executed at the level of the best products in the category, over a distinctive invented visual world. Reference product (2026-10-22): Vercel dashboard (Geist design system).
- Official visual identity (owner, 2026-10-22): the Vercel-style prototype (https://claude.ai/artifact/MJJHKXxGN2GA8tpakMnemf) and its DESIGN.md are the Avant identity. Future screens, including the Vue 3 build, inherit it.

## Evidence on Hand

- No real client data in the prototype. All names, emails, network codes and sites are synthetic and must be labeled as examples.
- No testimonials, customers, metrics or pricing exist; do not invent any.

## Product Principles

1. The task first: a site owner should finish setup without support.
2. Show the state of every connection and invite plainly, with the fix next to the problem.
3. One company, many people: who has access and what it costs against the staff limit is always visible.
4. Same product in three languages; no string is hard-wired to Portuguese.

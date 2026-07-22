---
title: Payment provider comparison
description: Zambian payment providers side by side — rails supported, reported setup fees, transaction rates and settlement times, as reported by practitioners between 2023 and 2026.
verified:
  date: 2026-07-19
  level: hearsay
volatile: true
---

:::caution[Community-sourced — help us verify it]
Every figure on this page is a **practitioner report** from community discussion, with its
date — not an official price list. Fees and availability in this market change fast.
**Check anything you are about to act on, then [update this page](/contributing/).**
:::

This is the side-by-side view. For guidance on choosing, start with
[which payment gateway should you use](/payments/) — this page is the reference table behind it.

## The market at a glance

Blank cells mean **nobody has reported it** — that absence is itself useful
information. Dates in brackets are when the figure was last reported, not when it was set.

| Provider | Mobile money | Cards | Reported setup fee | Reported rate | Reported settlement |
| --- | --- | --- | --- | --- | --- |
| [DPO](/providers/dpo/) | Yes | Yes — the 2026 default | None; free test env (Oct 2023) | **Unknown — never publicly quoted** | T+2, auto above ~$100 (Oct 2023–Oct 2024) |
| Lenco (BroadPay, formerly Sparco) | Yes | Down since ~early 2025 | | 3.5% mobile, 3.8% card (Dec 2023–Mar 2024) | Instant MM, T+1 local cards, T+8 intl (Jul 2024) |
| PawaPay | Yes — 2026 favourite | | | | |
| 543 Konse Konse (cGrate) | Yes | | Free if self-integrated; $1,000 and K5,800 also reported (2023–2025) | 1.5% mobile (Aug 2025–Apr 2026) | |
| Lipila (Hobbiton) | Yes | | Free (Apr 2026) | | |
| Digital PayGo | Yes | | Free if self-integrated (Apr 2026) | 1.5% (Apr 2026) | |
| Tingg (Cellulant) | Yes | | $500 or $1,000 — contested (Oct 2023–Mar 2024) | ~5% (Mar 2024) | |
| Kazang | Yes | | $2,000 "commitment fee" (Oct 2023) | | |
| ZynlePay | Yes | | K7,000 (Apr 2026) | | |
| PrimePay / PrimeNet | Yes | Yes | K12,000 — quoted by its own staff (Aug 2025) | 3% mobile, 4% card (Aug 2025) | |
| Tilt (Zoona) | Yes | | | 2.5% + K1,000/mo minimum (Dec 2023) | |
| eLipa | Yes | | | ~2.5% pre-launch estimate (Oct 2023) | |
| Tumeny | Yes | | | 3% or 4% — contested (Mar 2024) | |
| Direct MNO (MTN / Airtel / Zamtel) | Yes | | None charged to aggregators, per a practitioner | ~2% (Mar 2025) | |
| Flutterwave | | | | Recurring rates asked Apr 2025 — **zero replies** | |

## How to read this table

- **Setup fees cluster into two camps.** Providers that let you self-integrate charge nothing
  (DPO, Lipila, Digital PayGo, cGrate); providers that quote four- and five-figure Kwacha fees are
  charging for their own onboarding process, not for a cost the mobile networks impose. One
  practitioner's argument the wiki finds sound: aggregators pay no once-off integration fee to MTN,
  Airtel or Zamtel, so a setup fee is a cost passed to you, not one incurred for you.
- **Mobile-money rates run 1.5%–3.5%**, with 1.5% (cGrate, Digital PayGo) at the bottom end in
  2026 reports and Lenco's 3.5% at the top. Going direct to the mobile networks is cheaper still
  (~2% reported) but means three integrations, three reconciliations and three floats.
- **Cards are a different world.** Aggregator card products degraded badly through 2025 — see
  [accepting card payments](/payments/card-payments/) — which is why DPO dominates the card column
  despite being the most complained-about provider in community discussions.
- **Settlement is where the pain is.** Only three providers have reported settlement terms, and
  DPO's cash-out delays are the single most repeated operational complaint.

## Contested figures

Community reports contradict each other in places. The wiki records the disagreement rather than picking a
winner:

- **DPO setup fee** — reported once as ~K5,000 and corrected the same day by four separate people
  who onboarded free. "No setup fee" is far better supported.
- **Tingg setup fee** — $500 (Oct 2023) and $1,000 (Mar 2024), five months apart. Both may have
  been true when quoted.
- **cGrate setup fee** — "free if you self-integrate" vs $1,000 (Sep 2025) and "K5,800" (Oct 2023).
  The paid figure is presumably their done-for-you integration.
- **Tumeny rate** — quoted at 3% and 4% in the same thread (Mar 2024), never resolved.

## Known open questions

Asked in the community and never answered. If you hold one of these answers, it is worth more than
any row above:

- **What does DPO actually charge per transaction?** Asked Sep 2023. Never answered in three years
  of archives.
- **What are the withdrawal fees and minimums** across the main gateways? Asked Jan 2025 and
  Sep 2025 — zero replies both times.
- **What are Flutterwave's rates for recurring payments in Zambia?** Asked Apr 2025 — zero replies.
- **Which providers are currently PCI DSS-suspended for cards**, and which have been reinstated?
  The causal story behind the card column.

## Provider pages

- [DPO](/providers/dpo/) — the card default, and the most complained-about

Pages for Lenco and PawaPay have not been written yet.
[Your first-hand report could be the seed](/contributing/).

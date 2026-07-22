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

Blank cells indicate **no data available**. Dates in brackets indicate when the figure was last reported, not when it was set.

| Provider | Mobile money | Cards | Reported setup fee | Reported rate | Reported settlement |
| --- | --- | --- | --- | --- | --- |
| [DPO](/providers/dpo/) | Yes | Yes — the 2026 default | None; free test env (Oct 2023) | **Unknown** | T+2, auto above ~$100 (Oct 2023–Oct 2024) |
| Lenco (BroadPay, formerly Sparco) | Yes | Down since ~early 2025 | | 3.5% mobile, 3.8% card (Dec 2023–Mar 2024) | Instant MM, T+1 local cards, T+8 intl (Jul 2024) |
| PawaPay | Yes — widely adopted as of 2026 | | | | |
| 543 Konse Konse (cGrate) | Yes | | Free if self-integrated; $1,000 and K5,800 also reported (2023–2025) | 1.5% mobile (Aug 2025–Apr 2026) | |
| Lipila (Hobbiton) | Yes | | Free (Apr 2026) | | |
| Digital PayGo | Yes | | Free if self-integrated (Apr 2026) | 1.5% (Apr 2026) | |
| Tingg (Cellulant) | Yes | | $500 or $1,000 — varies by report (Oct 2023–Mar 2024) | ~5% (Mar 2024) | |
| Kazang | Yes | | $2,000 commitment fee (Oct 2023) | | |
| ZynlePay | Yes | | K7,000 (Apr 2026) | | |
| PrimePay / PrimeNet | Yes | Yes | K12,000 (Aug 2025) | 3% mobile, 4% card (Aug 2025) | |
| Tilt (Zoona) | Yes | | | 2.5% + K1,000/mo minimum (Dec 2023) | |
| eLipa | Yes | | | ~2.5% pre-launch estimate (Oct 2023) | |
| Tumeny | Yes | | | 3% or 4% — varies by report (Mar 2024) | |
| Direct MNO (MTN / Airtel / Zamtel) | Yes | | None charged to aggregators | ~2% (Mar 2025) | |
| Flutterwave | | | | **Unknown** | |

## How to read this table

- **Setup fees cluster into two camps.** Providers that support self-integration charge nothing
  (DPO, Lipila, Digital PayGo, cGrate); providers that quote four- and five-figure Kwacha fees are
  charging for their own onboarding process. Aggregators pay no once-off integration fee to MTN,
  Airtel or Zamtel, so a setup fee is a cost passed to the merchant, not one incurred on their behalf.
- **Mobile-money rates run 1.5%–3.5%**, with 1.5% (cGrate, Digital PayGo) at the bottom end in
  2026 reports and Lenco's 3.5% at the top. Going direct to the mobile networks is cheaper still
  (~2% reported) but means three integrations, three reconciliations and three floats.
- **Cards are a different world.** Aggregator card support declined through 2025 — see
  [accepting card payments](/payments/card-payments/) — which is why DPO dominates the card column.
- **Settlement data is sparse.** Only three providers have documented settlement terms. DPO's
  cash-out delays are a frequently cited operational issue.

## Provider pages

- [DPO](/providers/dpo/) — the primary card-processing option

Pages for Lenco and PawaPay have not been written yet.
[Contribute a provider page](/contributing/).

---
title: Payment provider comparison
description: Compare Zambian payment providers by supported payment methods, setup fees, transaction fees, and settlement times.
verified:
  date: 2026-10-22
  level: hearsay
volatile: true
---

:::caution[Community-sourced — help us verify it]
Most figures on this page are **practitioner reports** from community discussion. The PayBoss row uses BGS information from 2025. Only the PayBoss addition was checked on 2026-10-22. Other entries retain their earlier report dates. Fees and availability in this market change fast. **Check anything you are about to act on, then [update this page](/contributing/).**
:::

This is the side-by-side view. For guidance on choosing, start with [which payment gateway should you use](/payments/) — this page is the reference table behind it.

## The market at a glance

Blank cells indicate **no data available**. Dates in brackets identify the report or source document, not confirmation of current terms.

| Provider | Mobile money | Cards | Reported setup fee | Reported rate | Reported settlement |
| --- | --- | --- | --- | --- | --- |
| [DPO](/providers/dpo/) | Yes | Yes — the 2026 default | None; free test env (Oct 2023) | **Unknown** | T+2, auto above ~$100 (Oct 2023–Oct 2024) |
| [PayBoss (BGS)](/providers/payboss/) | Listed: Airtel, MTN, Zamtel | Listed in pricing; live processing not tested | ZMW 20,000 (2025) | Fixed ZMW 0.80–7.50 by mobile money range; 4% cards; 2% bulk disbursements (2025; [pricing](/providers/payboss/#pricing-2025)) | Not stated |
| Lenco (BroadPay, formerly Sparco) | Yes | Down since ~early 2025 | | 3.5% mobile, 3.8% card (Dec 2023–Mar 2024) | Instant MM, T+1 local cards, T+8 intl (Jul 2024) |
| [GeePay](/providers/geepay/) | Yes — all three MNOs | | | | |
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

- **Setup fees cluster into two camps.** Providers that support self-integration charge nothing (DPO, Lipila, Digital PayGo, cGrate); providers that quote four- and five-figure Kwacha fees are charging for their own onboarding process. Aggregators pay no once-off integration fee to MTN, Airtel or Zamtel, so a setup fee is a cost passed to the merchant, not one incurred on their behalf.
- **Reported percentage fees for mobile money run 1.5%–3.5%**, with 1.5% (cGrate, Digital PayGo) at the bottom end in 2026 reports and Lenco's 3.5% at the top. Going direct to the mobile networks is cheaper still (~2% reported) but means three integrations, three reconciliations and three floats.
- **PayBoss lists fixed mobile money fees by transaction range.** Its ZMW 0.80–7.50 fees are amounts, not percentages. See the [full fee table](/providers/payboss/#pricing-2025).
- **Cards are a different world.** Aggregator card support declined through 2025 — see [accepting card payments](/payments/card-payments/) — which is why DPO dominates the card column.
- **Settlement data is sparse.** Only three providers have documented settlement terms. DPO's cash-out delays are a frequently cited operational issue.

## Provider pages

- [DPO](/providers/dpo/) — the primary card-processing option
- [Lenco (BroadPay)](/providers/lenco/) — mobile money across all three MNOs
- [GeePay](/providers/geepay/) — mobile-money collections across all three MNOs
- [PayBoss (BGS)](/providers/payboss/) — services, 2025 pricing, and merchant KYC requirements

A PawaPay page has not been written yet. [Contribute a provider page](/contributing/).

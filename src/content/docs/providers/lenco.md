---
title: Lenco by BroadPay
description: Community notes on Lenco (by BroadPay) as a Zambian payment aggregator — mobile money, bank transfers, card payment status, known upstream dependencies and reported fees.
verified:
  date: 2026-07-22
  level: reported
volatile: true
---

:::caution[Partially verified]
Card payment issues are well-documented across multiple independent reports. Other details may be
incomplete. **Verify before acting, then [update this page](/contributing/).**
:::

Lenco by BroadPay (formerly just "Lenco") is a Zambian payment aggregator. Its strength is **mobile
money collection and disbursement** across all three networks. Its card product has been unreliable
since early 2025.

## At a glance

| | |
| --- | --- |
| **Supports** | Mobile money (Airtel Money, MTN MoMo, Zamtel Kwacha), bank transfers, cards (Visa/Mastercard — currently unreliable) |
| **Transaction fee** | **Not publicly listed.** Pricing is negotiated per merchant. |
| **API style** | REST |
| **Office** | Piziya House, Plot 2374 Thabo Mbeki Road, Lusaka |
| **Zambia support** | support.zm@lenco.co |
| **Website** | [lenco.co/zm](https://lenco.co/zm) |

## Mobile money

This is Lenco's primary product and where most integrations land. It supports collections and
disbursements on all three Zambian MNOs: Airtel Money, MTN MoMo and Zamtel Kwacha.

### MNO maintenance windows

Lenco sends maintenance notices when a specific MNO is scheduled for downtime — for example, Airtel
Money going offline for a maintenance window. During these windows, collections and disbursements for
that network fail while the other two continue to work.

Build for this:

- Surface a user-facing message when a payment fails during a known maintenance window, rather than
  showing a generic error.
- If your product supports multiple MNOs, offer the user an alternative network when one is down.
- Log maintenance windows you receive from Lenco so you can correlate them with failed-transaction
  spikes after the fact.

## Card payments

Lenco offers Visa and Mastercard acceptance on paper, but the product has been down or unreliable
since early 2025. This is extensively documented on the
[card payments page](/payments/card-payments/), including a timeline of community reports stretching
from June 2025 through February 2026.

**Do not depend on Lenco for card acceptance without testing it yourself first.** If cards are
critical to your product, see the [card payments page](/payments/card-payments/) for the current
state of the market and alternative routes including direct bank acquiring.

## Merchant dashboard

Lenco provides a merchant portal for viewing transactions and managing transfers. Profile changes and
authorisation setup are handled through the portal, typically with support assistance.

## Open questions

- **What does Lenco actually charge?** Transaction fees are not publicly listed. If you have a rate
  card you can share — redacted to just the fee structure — [open a PR](/contributing/).
- What is the settlement timeline for mobile money collections?
- Is there a public status page or programmatic way to check MNO maintenance windows?
- What is the current state of card payments? As of the last documented report, they were still
  down.

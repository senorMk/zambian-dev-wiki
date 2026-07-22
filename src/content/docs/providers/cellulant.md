---
title: Cellulant (Tingg)
description: Community notes on Cellulant's Tingg platform as a Zambian payment aggregator — integration flows, sandbox reliability, onboarding timelines and production stability.
verified:
  date: 2026-07-22
  level: reported
volatile: true
---

:::caution[Reported — not yet independently confirmed]
Based on integration experience, not on Cellulant's own documentation.
**Verify before acting, then [update this page](/contributing/).**
:::

Cellulant is a Kenya-headquartered payment aggregator operating across Africa. Their product,
**Tingg**, provides a unified API for collecting payments via mobile money and cards in Zambia and
other markets.

## At a glance

| | |
| --- | --- |
| **Product** | Tingg (by Cellulant) |
| **Supports** | MTN MoMo, Airtel Money, Zamtel Kwacha, cards |
| **API style** | REST — Tingg Global API (`BEEP.postPayment`) |
| **Integration flows** | Express (hosted checkout) and Custom API |
| **Transaction fee** | **Not publicly listed.** Negotiated per merchant. |
| **HQ** | Nairobi, Kenya |
| **Support** | onboarding-tech-support@cellulant.io |

## Integration flows

Cellulant offers two paths:

**Express checkout.** Cellulant hosts the payment page. Your application redirects the customer to
Tingg, where they choose a payment method (MTN MoMo, Airtel Money, Zamtel Kwacha, or card) and
complete the transaction. This is the faster path to go live.

**Custom API.** You build the payment UI yourself and call the Tingg Global API directly. The
underlying method for both flows is `BEEP.postPayment`.

Note that **IP whitelisting is required** to view transactions on Cellulant's merchant dashboard.

## Sandbox reliability

The sandbox is the primary friction point during integration.

- The sandbox is **shared** between Express and Custom API flows. When it goes down, there is no
  alternative testing path.
- Sandbox simulations have been **intermittently broken for specific payment methods**. MTN and
  Zamtel simulations tend to recover first, while Airtel and card simulations may remain broken
  longer.
- Outages can last **weeks** and may require multiple follow-ups with support to resolve.
- When a simulation is broken, Cellulant reviews internally — there is no self-service fix or
  workaround available to merchants.

Integration timelines should account for potential sandbox downtime.

## Onboarding timeline

Onboarding typically takes **1+ months** from first contact to production readiness.

Long onboarding is common among African payment aggregators. Projects with fixed launch dates
should begin the Cellulant integration early.

## Support

Support is handled via **onboarding-tech-support@cellulant.io**.

The support team operates on **East Africa Time (EAT, UTC+3)**, which is one hour ahead of Zambia's
Central Africa Time (CAT, UTC+2).

## Production reliability

The Tingg Global API (`BEEP.postPayment`) has returned HTTP 503 errors in production, affecting
real-time payment processing. Because the API is shared infrastructure, outages affect all merchants
using the same endpoint.

For time-sensitive transactions (e.g. electricity token purchases), implement retry logic and handle
upstream API unavailability gracefully.

## Fees

Not publicly listed. Pricing is negotiated per merchant. No public rate card is available.

## Open questions

- What are the actual transaction fees for Zambian mobile money and card payments?
- What is Cellulant's uptime SLA, if any?
- Are there documented webhook/callback reliability issues similar to those reported with other
  aggregators?

Contributions welcome — [open a PR](/contributing/).

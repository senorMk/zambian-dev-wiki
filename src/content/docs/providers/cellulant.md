---
title: Cellulant (Tingg)
description: Community notes on Cellulant's Tingg platform as a Zambian payment aggregator — integration flows, sandbox reliability, onboarding timelines and production stability.
verified:
  date: 2026-07-22
  level: reported
volatile: true
---

:::caution[Reported — not yet independently confirmed]
Based on first-hand integration experience (2025-2026), not on Cellulant's own documentation.
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

## Sandbox — plan for instability

The sandbox is the single biggest friction point integrators have reported. A few things to know
before you start:

- The sandbox is **shared** between Express and Custom API flows. When it goes down, there is no
  alternative testing path.
- Sandbox simulations have been **intermittently broken for specific payment methods**. Developers
  report that MTN and Zamtel simulations tend to work first, while Airtel and card simulations have
  taken longer to be fixed on Cellulant's side.
- Outages lasting **weeks** have been reported, requiring multiple follow-ups with support.
- When a simulation is broken, Cellulant's team reviews internally — there is no self-service fix or
  workaround available to merchants.

If you are estimating integration timelines, budget generously for sandbox downtime.

## Onboarding timeline

Integrators report timelines of **1+ months** from first contact to production readiness.

This is not necessarily Cellulant-specific — long onboarding is common with African payment
aggregators — but it is worth planning for. If your project has a hard launch date, start the
Cellulant integration well before you think you need to.

## Support

Support is handled via **onboarding-tech-support@cellulant.io**.

The support team operates on **East Africa Time (EAT, UTC+3)**, which is one hour ahead of Zambia's
Central Africa Time (CAT, UTC+2).

## Production reliability

HTTP 503 errors on the Tingg Global API (`BEEP.postPayment`) have been reported in production as
recently as April 2026, affecting real-time payment processing. This is a shared infrastructure
concern — when the API is down, it affects all merchants using the same endpoint.

If your use case involves time-sensitive transactions (e.g. electricity token purchases), build in
retry logic and consider how your application behaves when the upstream API is unavailable.

## Fees

Not publicly listed. Pricing is negotiated per merchant. No public rate card is available.

## Open questions

- What are the actual transaction fees for Zambian mobile money and card payments?
- What is Cellulant's uptime SLA, if any?
- Are there documented webhook/callback reliability issues similar to those reported with other
  aggregators?

If you have integrated Tingg in Zambia, your experience would help fill these gaps.
[Open a PR](/contributing/).

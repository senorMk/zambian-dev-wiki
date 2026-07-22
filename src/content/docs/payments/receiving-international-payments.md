---
title: Receiving money from abroad
description: How Zambian developers actually get paid by foreign clients and customers — merchants of record, foreign entities, Payoneer, Deel-issued cards, and the local virtual-card outages.
verified:
  date: 2026-07-19
  level: hearsay
volatile: true
---

:::caution[Unverified — help us improve it]
The routes below have not been confirmed with providers. Fees and availability change fast.
**Verify before acting, then [update this page](/contributing/).**
:::

Getting paid **by** foreign customers is the mirror image of the gateway problem: local rails are
built for Kwacha, and the global defaults — Stripe, PayPal — don't fully work here. Four routes
are commonly used.

## The four main routes

**1. A merchant of record.** A foreign company sells to your customers on your behalf, handles
their card processing and sales-tax obligations, and pays you out. This is the most
straightforward option for selling software to the world from Zambia. Specific providers, fees,
and payout mechanics remain undocumented.

**2. A foreign entity + Stripe.** Incorporate in a country Stripe supports, then onboard there.
This is the standard approach for full Stripe access, though it involves additional cost and
paperwork. See [Does Stripe work in Zambia?](/payments/stripe/).

**3. Payoneer.** Payoneer serves both as a route for receiving balances and for obtaining a **foreign
card** — a workaround for Zambian cards failing on Google, AWS and app-store billing
(see [why Zambian cards fail on foreign services](/payments/card-payments/#why-zambian-cards-fail-on-foreign-services)).

**4. Deel.** An employer-of-record platform that issues **virtual and physical foreign cards**,
used to pay for hosting, tooling and ads that local cards decline.

## Local virtual cards: all have had extended outages

**Every local virtual-card product has experienced extended outages.** The foreign-card alternatives
above (Deel, Payoneer) serve as fallbacks when local options are down — which happens frequently
enough that local virtual cards cannot yet be considered dependable.

## The reverse direction

If your problem is the opposite one — **paying for things** from Zambia — that is documented under
[accepting card payments](/payments/card-payments/#why-zambian-cards-fail-on-foreign-services):
micro-charges failing, recurring subscriptions declining, and the shared-BIN theory.

## Open questions

These questions remain unanswered. If you know, [fix this page](/contributing/):

- Which merchant-of-record providers work for Zambian sellers, what are the fees, and how do
  payouts reach a Zambian bank account?
- What does withdrawing from Payoneer to Kwacha actually cost, end to end?
- Which local virtual-card products are currently **up**, and what are their limits?
- For freelancers invoicing foreign clients directly: what services work for receiving payment, and
  what does the bank charge on landing?

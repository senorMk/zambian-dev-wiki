---
title: Receiving money from abroad
description: How Zambian developers actually get paid by foreign clients and customers — merchants of record, foreign entities, Payoneer, Deel-issued cards, and the local virtual-card outages.
verified:
  date: 2026-07-19
  level: hearsay
volatile: true
---

:::caution[Community-sourced — help us verify it]
Assembled from community discussion, not from provider confirmations. The routes below are what
practitioners report using — fees and availability change fast.
**Verify before acting, then [update this page](/contributing/).**
:::

Getting paid **by** foreign customers is the mirror image of the gateway problem: local rails are
built for Kwacha, and the global defaults — Stripe, PayPal — don't fully work here. Four routes
recur in community discussions.

## The four routes people report

**1. A merchant of record.** A foreign company sells to your customers on your behalf, handles
their card processing and sales-tax obligations, and pays you out. **Several people settled on this
route for SaaS in 2026** — it is the current community consensus for selling software to the
world from Zambia. Nobody has reported which providers they chose or what they pay.

**2. A foreign entity + Stripe.** Incorporate in a country Stripe supports, then onboard there.
Repeatedly advised as the "proper" fix; nobody has reported the actual cost or
paperwork. See [Does Stripe work in Zambia?](/payments/stripe/).

**3. Payoneer.** Reported as a route both for receiving balances and for obtaining a **foreign
card** — the durable workaround for Zambian cards failing on Google, AWS and app-store billing
(see [why Zambian cards fail on foreign services](/payments/card-payments/#why-zambian-cards-fail-on-foreign-services)).

**4. Deel.** The employer-of-record that several developers report using — it issues **virtual and
physical foreign cards**, which is how they pay for hosting, tooling and ads that local cards
decline.

## Local virtual cards: all have had extended outages

Worth stating plainly because it surprises people: **every local virtual-card product mentioned in
the community has reported has had an extended outage at some point.** The foreign-card workarounds above (Deel,
Payoneer) are what people report relying on when local options are down — which is often enough
that nobody treats local virtual cards as dependable yet.

## The reverse direction

If your problem is the opposite one — **paying for things** from Zambia — that is documented under
[accepting card payments](/payments/card-payments/#why-zambian-cards-fail-on-foreign-services):
micro-charges failing, recurring subscriptions declining, and the shared-BIN theory.

## Open questions

Asked in the community, never satisfactorily answered. If you know, [fix this page](/contributing/):

- Which merchant-of-record providers are Zambian sellers actually using in 2026, what are the real
  fees, and how do payouts reach a Zambian bank account?
- What does withdrawing from Payoneer to Kwacha actually cost, end to end?
- Which local virtual-card products are currently **up**, and what are their limits?
- For freelancers invoicing foreign clients directly: what are people using to receive — and what
  does the bank charge on landing?

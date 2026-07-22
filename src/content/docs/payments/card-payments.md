---
title: Accepting card payments in Zambia
description: Card acceptance in Zambia is severely constrained. What broke, what still works, and the bank-acquiring route for Visa and Mastercard.
verified:
  date: 2026-07-19
  level: hearsay
volatile: true
---

:::caution[Community-sourced — help us verify it]
This page is assembled from community discussion, not from provider confirmations. The situation it
describes is volatile by nature. **Verify before acting, then [update this page](/contributing/).**
:::

If you only need mobile money, skip this page — [start here](/payments/) instead. Card acceptance is
where Zambian developers lose the most time.

## What works for cards now

**DPO** is the most commonly used option for card acceptance as of 2026, though it draws frequent
complaints about reliability and developer experience.
See [the DPO page](/providers/dpo/).

No other aggregator-based card gateway is known to be operational in Zambia as of mid-2026.

## The bank-acquiring route

For higher-volume or mission-critical card acceptance, the standard approach is direct merchant
onboarding through a bank rather than relying on an aggregator.

Named routes:

- **Indo Zambia Bank** — specifically recommended for e-commerce enablement.
- **CyberSource** via an acquiring bank — ABSA and Zanaco both use CyberSource. A business account
  with the acquiring bank is required.
- **EFT Corp** — named alongside CyberSource as an integrator for debit card services.

This route is slower and involves compliance work, but it is the one that does not depend on an
aggregator's card product staying up.

:::tip[Budget for CyberSource's documentation]
CyberSource's documentation is widely considered poor. Its webhooks are unreliable, particularly
for recurring payments — webhook notifications may never arrive despite health checks passing.
The "secure acceptance" signature-verification flow is a known pain point that has blocked
developers for weeks.
:::

## Why Zambian cards fail on foreign services

A separate but adjacent problem: paying **for** things. Local debit cards frequently fail on Google,
AWS and app-store billing.

Known patterns:

- **Micro-charges fail.** Sub-dollar charges (e.g. AWS Route 53 per-query fees) are frequently
  declined on local debit cards with no option to batch them.
- **Absa cards fail most often on Google billing.** Some businesses have switched from Google Maps
  to Mapbox specifically because of this.
- **Recurring subscriptions decline** far more often than one-off purchases. The Airtel Mastercard,
  for example, works for one-off online purchases but is frequently declined on subscriptions.
- **Shared BINs.** Smaller banks share a BIN range, which can complicate Visa backend processing and
  cause declines at many gateways. Unverified.

The most reliable workaround is a **foreign card** — commonly obtained through Deel (which issues
virtual and physical cards) or Payoneer. Local virtual-card products have all had extended outages;
see the virtual cards section of
[receiving international payments](/payments/receiving-international-payments/).

## Open questions

- What is the **actual** current PCI DSS / BOZ position on local card acquiring? Primary source needed.
- What does DPO charge per card transaction? Not publicly documented.
- Which banks currently offer e-commerce merchant acquiring, and what do they require?

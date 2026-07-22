---
title: DPO Group (Zambia)
description: Community notes on DPO Group as a Zambian payment gateway — onboarding, settlement times, card support, known issues and reported fees.
verified:
  date: 2026-07-19
  level: hearsay
volatile: true
---

:::caution[Community-sourced — help us verify it]
Assembled from community discussion, not from DPO's own documentation or a support confirmation.
**Verify before acting, then [update this page](/contributing/).**
:::

DPO Group is the most commonly used payment gateway for **card acceptance** in Zambia, and also the
most frequently criticised.

## At a glance

| | |
| --- | --- |
| **Supports** | Cards (Visa/Mastercard) and mobile money |
| **Setup fee** | None reported. Free test environment. |
| **Transaction fee** | **Unknown — never publicly quoted.** See [open questions](#open-questions). |
| **Settlement** | T+1 to T+2 reported; auto-settles above ~$100 balance (2023) |
| **API style** | SOAP XML |
| **Integrations** | WooCommerce, Shopify |
| **Ownership** | Kenyan-founded, acquired PayGate (South Africa); operates across Africa |

## Why people use it anyway

- It is one of very few options that still processes **cards** in Zambia. See
  [card payments](/payments/card-payments/).
- No setup fee and a free sandbox.
- Scale. DPO is one of the largest payment groups in Africa, and **Airtel Zambia itself uses DPO**
  to collect payments for its 5G broadband routers and data — including for Airtel Money payments,
  via a merchant account on DPO.
- Available on Shopify, where local alternatives generally are not.

## The complaints

These are consistent across years and across different merchants.

**Settlement and withdrawal delays.** The most common operational complaint. Merchants consistently
report that withdrawing collected funds is slow, with some settlements outstanding for over a month.

**A long-standing notification bug.** DPO sometimes debits the customer but fails to send a
transaction notification to the merchant's platform, causing the transaction to appear as failed on
the merchant side. This issue has been reported as unresolved since at least October 2022.

The recommended mitigation, applicable to any Zambian gateway: make the integration asynchronous,
allow enough time for the user to enter their PIN, and **poll transaction status several times a
minute** rather than trusting a webhook to arrive.

**Onboarding friction.** Experiences range from smooth to impossible and appear to depend heavily on
whether documentation is exactly in order. Common complaints include slow KYC verification, delayed
issuance of live API keys, unresponsive support during onboarding, and outright rejections without
clear reasons. Merchants whose paperwork is complete generally report a smoother process.

**Checkout experience.** Customers are redirected off your site to DPO's hosted page, re-enter
details they already gave you, and land on a page carrying DPO's own advertising — which merchants
report confuses customers into thinking they have been sent somewhere unrelated.

A counter-argument exists: African customers often trust a redirect to a branded third-party page
*more* than an in-site form, which is precisely why PayPal built its flow that way.

**Support.** Zambian support is thin — typically a country manager and a sales representative, with
technical help routed through other countries.

## Sentiment over time

**DPO's reputation has declined while its market share has risen.**

- 2023 — Considered more reliable than Flutterwave, but already drawing strong criticism over settlement issues.
- 2024 — Became the grudging default; T+2 delays and cash-out problems widely reported.
- 2025 — Merchant frustration intensified, with long-time users expressing intent to leave.
- 2026 — Merchants continue using DPO primarily because alternatives for card acceptance have stopped working.

## Open questions

- **What does DPO charge per transaction?** No public pricing information is available. This is the
  single biggest gap on this page.
- What is the current settlement SLA, and the minimum settlement threshold?
- Is the transaction-notification bug still open?

If you have a DPO merchant account, your pricing schedule would answer the first question for
everyone. [Open a PR](/contributing/).

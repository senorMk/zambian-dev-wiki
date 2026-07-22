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

DPO Group is the payment gateway Zambian developers name most often for **card acceptance**, and
simultaneously the one they complain about most. Both of those things have been true for three years.

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
- No setup fee and a free sandbox — confirmed by four separate people after one contrary report.
- Scale. It is described as the largest payment group in Africa, and **Airtel Zambia itself uses DPO**
  to collect payments for its 5G broadband routers and data — including for Airtel Money payments,
  via a merchant account on DPO.
- Available on Shopify, where local alternatives generally are not.

## The complaints

These are consistent across years and across different merchants.

**Settlement and withdrawal delays.** The single most repeated operational complaint. "The pain point
seems to be withdrawing collected funds. It takes loooong" (Feb 2024). One merchant reported a
settlement outstanding for over a month (Oct 2023).

**A long-standing notification bug.** From a merchant using DPO since 2017, reported April 2026:

> DPO takes the money from the client but never tells my platform it's done so. Transaction is marked
> as failed on my site. They've been "working on it" since Oct 2022.

Their mitigation, which is good advice for any Zambian gateway: make the integration asynchronous,
allow enough time for the user to enter their PIN, and **poll transaction status several times a
minute** rather than trusting a webhook to arrive.

**Onboarding friction.** Reports range from smooth to impossible, and appear to depend heavily on
whether your paperwork is exactly in order:

| Report | Date |
| --- | --- |
| "It's taking them forever to send our live keys… The KYC verification too forever." | Oct 2023 |
| "I tried setting up an account with them. I won't lie it's hectic. Going back and forth. I never even succeeded." | Aug 2024 |
| "Been three weeks… Was not accepting my documents upload then the lady would respond every week to one of my emails." | Nov 2024 |
| "DPO rejected me get go kaya why" — despite "all my company documents in order" | Feb 2026 |
| "I did registration a few months ago, it was a smooth process." | Jan 2026 |
| "DPO only reject if your paper is not in order… they are so far the best." | Feb 2026 |

**Checkout experience.** Customers are redirected off your site to DPO's hosted page, re-enter
details they already gave you, and land on a page carrying DPO's own advertising — which merchants
report confuses customers into thinking they have been sent somewhere unrelated.

There is a real counter-argument, made in the group: African customers often trust a redirect to a
branded third-party page *more* than an in-site form, which is precisely why PayPal built its flow
that way.

**Support.** Merchants report that Zambian support is thin — a country manager and a sales rep, with
actual technical help coming from other countries.

## Sentiment over time

Worth noting because it is unusual: **DPO's reputation fell while its market share rose.**

- 2023 — "more reliable than Flutterwave"… and also "DPO is a death penalty" and "seems like a scam at this point"
- 2024 — grudging default; T+2 and cash-out issues widely discussed
- 2025 — "I'm so very tired of DPO. They have been so bad this year"; "I've been using DPO since 2017 and have had it with them"
- 2026 — "Yeah I'm so very close to firing DPO" — from a merchant who is still using it, because the alternatives for cards stopped working

## Open questions

- **What does DPO charge per transaction?** Asked in September 2023 and never answered by anyone,
  anywhere, in three years of community archives. This is the single biggest gap on this page.
- What is the current settlement SLA, and the minimum settlement threshold?
- Is the transaction-notification bug still open?

If you have a DPO merchant account, your pricing schedule would answer the first question for
everyone. [Open a PR](/contributing/).

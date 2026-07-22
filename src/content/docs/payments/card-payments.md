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

## The state of it

Card processing through local aggregators degraded badly between 2025 and 2026.

The clearest single thread is Lenco's card product. Reports over eighteen months:

| Date | Report |
| --- | --- |
| Jun 2025 | "Lenco is down for months" |
| Jul 2025 | "Their card payment doesn't work anymore for the last 5 months" |
| Oct 2025 | "Lenco card payments has been down the last 9 months if I remember" |
| Feb 2026 | "Lenco is DOWN" — and a merchant accepted for mobile money "but since cards don't work there we needed an alternative" |

**The stated cause**, from someone working at a local payment processor (Jul 2025):

> Many aggregators have stopped processing card payments due to compliance issues... Several local
> aggregators have been suspended from offering card payment services until they achieve PCI DSS
> compliance.

:::note[Unverified and important]
That explanation is a single `reported` source who works in the industry, and whose neutrality was
questioned in the thread. It is the only causal explanation anyone offered, and it fits the observed
pattern — but it has not been confirmed against BOZ or any aggregator's own statement.
If you can source this properly, it is the most valuable correction on this wiki.
:::

## What people use for cards now

**DPO** is the answer practitioners give in 2026 — often as a single word, and rarely with enthusiasm.
It is simultaneously the most-recommended and the most-complained-about provider in community discussions.
See [the DPO page](/providers/dpo/).

One member asserted in May 2026 that there was "no active card payment collection gateway working"
in Zambia at all. That claim was challenged in-thread, never substantiated, and is contradicted by
DPO being recommended for cards in June and July 2026. Treat it as an outlier — but the fact that an
experienced developer believed it says something about the state of the market.

## The bank-acquiring route

For anything serious, the answer from a payments-industry contributor (May 2026) is that you do not
"integrate a gateway" at all — you get onboarded as a merchant by a bank:

> There is no such thing as Plug and Play in Payment Systems. You will need to be onboarded as an
> ECommerce Merchant and find a Bank that can enable you for EMV Payment card rails.

Named routes:

- **Indo Zambia Bank** — specifically recommended for e-commerce enablement.
- **CyberSource** via an acquiring bank — reported that ABSA and Zanaco both use it. One merchant in
  Feb 2026 settled on "Cybersource, that requires a business account with absa".
- **EFT Corp** — named alongside CyberSource as an integrator for debit card services.

This route is slower and involves compliance work, but it is the one that does not depend on an
aggregator's card product staying up.

:::tip[Budget for CyberSource's documentation]
Three separate developers independently described CyberSource's documentation as bad, and its
webhooks as unreliable — particularly for recurring payments, where one team never received
notifications at all despite health checks passing, and shipped a workaround instead.
A signature-verification problem in "secure acceptance" ran two developers in circles for weeks and
was never resolved in-thread.
:::

## Why Zambian cards fail on foreign services

A separate but adjacent problem: paying **for** things. Local debit cards frequently fail on Google,
AWS and app-store billing.

Reported patterns:

- **Micro-charges fail.** One developer's FNB card worked generally but failed on AWS Route 53
  charges "coz they are small, like less than a Dollar and you can't bulk pay".
- **Absa cards are the worst offender on Google billing** — reported by two people independently;
  one client abandoned Google Maps for Mapbox over it.
- **Recurring subscriptions decline** far more often than one-off purchases. On the Airtel Mastercard
  (Jun 2026): "works well on purchases online merch, not so good on recurring subscriptions, gets
  declined often."
- **Shared BINs.** One contributor's mechanistic explanation: smaller banks share a BIN range, which
  "complicates VISA backend systems" and causes declines at many gateways. Plausible, unverified.

The durable workaround people report is a **foreign card** — several obtained one through Deel
(an employer-of-record that issues virtual and physical cards), or via Payoneer. Local virtual-card
products have all had extended outages; see the virtual cards section of
[receiving international payments](/payments/receiving-international-payments/).

## Open questions

- What is the **actual** current PCI DSS / BOZ position on local card acquiring? Primary source needed.
- What does DPO charge per card transaction? Never answered in three years.
- Which banks currently offer e-commerce merchant acquiring, and what do they require?

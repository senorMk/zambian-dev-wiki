---
title: GeePay (Zambia)
description: Integrator notes on GeePay as a Zambian mobile-money collections gateway — auth model, the collect-then-poll flow, webhooks, recurring-billing workaround and unknown fees.
verified:
  date: 2026-08-09
  by: senorMk
  level: reported
volatile: true
---

:::note[Firsthand integration experience — pricing still unverified]
The integration notes below come from a developer who runs GeePay mobile-money collections in
a production Zambian product. The **API shape and flow are firsthand**. The **fees, rates and
settlement terms are not** — GeePay quotes those per merchant and they are marked unknown here.
Disclosure: the contributor integrates GeePay but is not affiliated with or employed by GeePay.
**Verify commercial terms before acting, then [update this page](/contributing/).**
:::

GeePay is a **mobile-money collections** gateway in Zambia. It collects from MTN, Airtel and
Zamtel wallets through one merchant account and REST API. It is collections-focused; this page
does not cover card acceptance or payouts.

## At a glance

| | |
| --- | --- |
| **Supports** | Mobile-money collections (MTN, Airtel, Zamtel) |
| **Cards** | Not covered here |
| **Setup fee** | **Unknown** — quoted per merchant |
| **Transaction fee** | **Unknown** — quoted per merchant |
| **Settlement** | **Unknown** — confirm the SLA and threshold with GeePay |
| **API style** | REST / JSON |
| **Auth** | OAuth2 client-credentials (client ID + secret → bearer token) |
| **Sandbox** | Yes — a test environment is available |

## How the integration works

The flow matches the pattern this wiki recommends for every Zambian gateway: **make it
asynchronous and poll for the result.**

1. **Get a token.** Exchange a client ID and secret for a short-lived bearer token
   (OAuth2 client-credentials). Cache it and refresh on expiry.
2. **Start a collection.** Call the mobile-money collect endpoint with the payer MSISDN, the
   amount and your own reference. GeePay pushes a PIN prompt to the payer's phone.
3. **Wait for the payer.** The payer enters their mobile-money PIN. This takes time. The initial
   response only means the request was accepted, not that money moved.
4. **Confirm the result.** Do **not** trust the webhook alone. Poll the status endpoint with your
   reference several times a minute until the transaction settles or fails.
5. **Reconcile the webhook.** GeePay also calls your callback URL when the state changes. Treat it
   as a hint that triggers a status check, not as the source of truth.

**Correlate on your own reference.** Send a reference you generate and match the callback and the
status poll back to it. Do not rely on GeePay's transaction ID being present at every step.

### Webhook authentication

The callback is **not cryptographically signed**. GeePay authenticates it with a **shared secret
token** that you configure and it echoes back. Check that token on every callback and reject the
request if it does not match. Keep the token out of source control.

## Recurring billing (subscriptions)

Zambian mobile money has **no card-style recurring debit** — see
[subscriptions do not work on mobile money](/payments/#subscriptions-do-not-work-on-mobile-money).
GeePay is no exception; you cannot pull funds on a schedule.

A working pattern, used in production against GeePay:

- Model each billing cycle as a **scheduled one-off collect** request, not a standing debit.
- On the due date, fire the collect. The payer approves it with their PIN, the same as any
  single payment.
- **Reconcile with webhook plus status polling**, then advance or lapse the subscription from the
  confirmed result.
- **Retry on failure** with a bounded schedule (for example, a few attempts over the grace period),
  because a decline often just means an empty wallet at that moment.

This is the "prompt-and-remind" workaround made concrete: recurring billing becomes a queue of
individually approved collections.

## Why teams pick it

- **All three networks through one API** — MTN, Airtel and Zamtel from a single merchant account
  and reconciliation.
- **A clean OAuth2 + REST/JSON interface** with a sandbox to test against before go-live.

## Open questions

If you have a GeePay merchant account, you can answer these for everyone. [Open a PR](/contributing/).

- **What does GeePay charge per collection?** No confirmed rate. The biggest gap on this page.
- **What is the setup fee, if any?**
- **What is the settlement SLA and minimum threshold?**
- **Which networks settle instantly, and which lag?**
- **Does GeePay offer signed webhooks** as an alternative to the shared-token callback?

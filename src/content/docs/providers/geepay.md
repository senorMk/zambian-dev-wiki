---
title: GeePay (Zambia)
description: Integrator notes on GeePay as a Zambian mobile-money collections gateway — auth model, the collect-then-poll flow, webhooks, recurring-billing workaround and unknown fees.
verified:
  date: 2026-11-13
  by: senorMk
  level: reported
volatile: true
---

:::note[Firsthand integration experience — pricing still unverified]
The integration notes below include experience from a production Zambian product. The fee
profile described below is one merchant's report, not a confirmed rate for all merchants.
Settlement terms remain unknown.
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

### Collection reference and retries

In July 2026, GeePay support told one production integrator that mobile networks require an
RFC 4122 version 4 UUID in `X-Transaction-Ref`. A different format led to a callback with
"Transaction was refused." Generate a reference for each payment attempt and save it before
you send the collection request. Use the same reference when you check that attempt's status.

A timeout or an unclear response does not prove that the collection failed. The request can
reach GeePay even if the response does not reach your server. Keep the payment pending and check
the original reference before you start another collection. Handle a clear rejection separately.
Use a bounded polling period and send unresolved payments for review. Do not mark a payment as
failed only because the polling period ended.

A callback can arrive before the collection request finishes. Save the reference before the
request, and prevent a later pending update from overwriting a confirmed result.

### API versions

In November 2026, one production integrator reported HTTP 403 responses from the old production
gateway and changed its integration to the v2 API. That v2 change passed unit tests, but it was
not verified with a sandbox or production payment. Confirm the current base URL, endpoint paths,
and access requirements with GeePay before release.

An earlier v1 sandbox test used `/v1/oauth/token` and `/v1/mobile-money/collect`. The status
request required `Content-Type: application/json` on the `GET`. These are historical sandbox
observations, not verified v2 requirements.

### Webhook authentication

The callbacks observed by the contributor were not cryptographically signed. One integration
adds its own secret token to the callback URL and checks that token on receipt. This is a
merchant-side safeguard; it does not establish that GeePay signs callbacks or provides a
separate token authentication feature. Protect the URL and token from logs and source control.
Check the transaction status with GeePay before you settle a payment.

## Collection fees

In November 2026, one merchant's GeePay fee profile displayed 1.8% with a K1 minimum for
Airtel, MTN, Zamtel, and ZEDMOBILE collections. The same profile also displayed a conflicting
0% note. The fee basis and rounding were not confirmed. This report does not establish the
rate for other merchants. Ask GeePay to confirm your fee, minimum, and rounding in writing.

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

- **What does GeePay charge per collection?** Confirm the reported profile and its conflicting note.
- **What is the setup fee, if any?**
- **What is the settlement SLA and minimum threshold?**
- **Which networks settle instantly, and which lag?**
- **Does GeePay offer signed webhooks** or another callback authentication method?

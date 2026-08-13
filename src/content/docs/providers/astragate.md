---
title: Astragate
description: Community notes on Astragate as a Zambian mobile money collections gateway — OAuth2 client-credentials auth, REST/JSON collections API, correlator IDs, callback webhooks and numeric status codes.
verified:
  date: 2026-08-10
  level: reported
volatile: true
---

:::caution[Reported, not officially verified]
Based on first-hand integration experience (2026), not on Astragate's own published documentation.
Fees, settlement terms and MNO coverage below are **not yet confirmed** — see [Open questions](#open-questions).
Details may have changed since the last integration. **Verify before acting, then [update this page](/contributing/).**
:::

Astragate is a **mobile money collections gateway** used in Zambia. Unlike the SOAP-based
aggregators, it exposes a **REST/JSON API** with **OAuth2 client-credentials auth** and an
**asynchronous callback (webhook)** model, so you do not have to poll for every result.

## At a glance

| | |
| --- | --- |
| **Supports** | Mobile money collections, settled in **ZMW** |
| **Setup fee** | Not confirmed |
| **Transaction fee** | Not confirmed |
| **Settlement** | Not confirmed |
| **API style** | REST / JSON |
| **Auth** | OAuth2 **client credentials** (separate auth host, short-lived bearer token) |
| **Callbacks** | Yes — async webhook per collection |
| **Website** | [astragate.africa](https://astragate.africa) |

## API overview

Two hosts are involved, and they are **different domains**:

- **Auth host** — issues the OAuth2 token, e.g. `https://auth.dev.astragate.africa/v1/auth/token`
- **API host** — the collections API, e.g. `https://api.dev.astragate.africa`

The examples above are the **dev / sandbox** hosts; production hosts differ.

### Typical collection flow

1. **Get a token.** POST your `client_id` / `client_secret` to the auth host using the
   `client_credentials` grant (form-encoded). You get back a short-lived bearer token
   (`access_token`, with `expires_in` — around 1 hour). Cache it and reuse it until shortly before
   expiry rather than fetching one per request.
2. **Initiate a collection.** `POST /v1/payment/collection` on the API host with a bearer token.
   You **generate the `correlatorId` yourself** and send it in the request — it is your idempotency
   key and the handle you use everywhere else. The body carries `accountNumber` (payer mobile),
   `amount`, `currency` (`ZMW`), `correlatorId` and `paymentDescription`.
3. **Wait for the callback.** Astragate calls your webhook URL asynchronously with the final result.
   Match it back to your record using your `correlatorId`.
4. **Poll as a fallback.** `GET /v1/payment/status/{correlatorId}` lets you query state if the
   callback is delayed or missed.

### Response envelope

Responses are wrapped in an envelope, and the **transaction status lives in `data`, not at the top
level**:

```json
{
  "statusCode": 200,
  "message": "...",
  "success": true,
  "data": {
    "statusCode": 4200,
    "statusDescription": "...",
    "astragateTransactionId": "...",
    "correlatorId": "..."
  }
}
```

The outer `statusCode` is the HTTP-style envelope result; the **inner `data.statusCode`** is the
payment status you must act on. Astragate's own transaction id comes back as `astragateTransactionId`.

### Status codes

Numeric codes, documented at
[docs.astragate.africa/reference/status-code](https://docs.astragate.africa/reference/status-code).
Observed mapping from a 2026 integration:

| Code | Meaning |
| --- | --- |
| `4200` | Success (paid) |
| `4005`, `4007`, `4011`, `4220`, `4230`, `4777` | Terminal failure |
| `4000`, `4001`, `4003`, `4008`, `4999` | Still processing — keep waiting |

Treat any **unknown** code as *pending*, not failed — see below.

## Integration notes

### Auth and API live on separate hosts

The token endpoint is on `auth.*` and the collections API is on `api.*`. Configure the two base URLs
independently — do not assume one host serves both.

### Make the callback idempotent

The webhook can be delivered more than once for the same collection. Key your handler on the
correlator ID, ignore duplicates, and **always return `200`** so Astragate does not keep retrying.
The callback endpoint must be **public** (no auth guard), so validate the payload before you act on it.

### Do not treat unknown codes as failed

Only success (`4200`) and a fixed set of failure codes are terminal. Map everything else — including
codes you have not seen before — to *pending*. Assuming "not success = failed" writes off slow MNO
approvals as failures and, worse, can mark a payment failed that later settles. Keep *pending*
distinct from *failed* in your own model.

### SSL in sandbox

The dev environment may present certificate issues. Integrations sometimes add an
"allow insecure SSL" switch **for the sandbox only**. Never carry that setting into production.

## Open questions

- What is the fee structure (setup and per-transaction), and is it negotiated per merchant?
- Which MNOs are supported (Airtel, MTN, Zamtel), and are payouts / disbursements offered as well as
  collections?
- What is the settlement SLA from Astragate to a bank account?
- What are the production auth and API hosts, and how does token lifetime differ from sandbox?
- Is there a signature / verification mechanism for validating callback authenticity?

If you have integrated with Astragate and can fill in any of these gaps,
[open a PR](/contributing/).

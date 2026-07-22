---
title: 543 Konse Konse (cGrate Africa)
description: Community notes on 543 Konse Konse as a Zambian mobile money aggregator — SOAP API integration, timeout handling, polling strategy, response code traps and reconciliation gotchas.
verified:
  date: 2026-07-22
  level: reported
volatile: true
---

:::caution[Reported, not officially verified]
Based on first-hand integration experience (2025-2026), not on cGrate's own published documentation.
Details may have changed since the last integration. **Verify before acting, then [update this page](/contributing/).**
:::

543 Konse Konse is a **mobile money aggregator** operated by cGrate Africa. It sits between your
application and the MNOs, giving you a single integration point for collections across **Airtel
Money, MTN MoMo, and Zamtel Money**.

## At a glance

| | |
| --- | --- |
| **Supports** | Mobile money (Airtel, MTN, Zamtel) via aggregation |
| **Setup fee** | Not publicly listed |
| **Transaction fee** | **Negotiated per merchant.** Not publicly listed. |
| **Settlement** | To merchant wallet on Konse Konse platform |
| **API style** | SOAP XML (methods use a `kon:` prefix) |
| **Website** | [www.543.co.zm](https://www.543.co.zm) |
| **Support email** | oursystemsarealwaysonline@cgrate.co.zm |
| **Address** | Plot No 35214, Alick Nkhata Road, Kalingalinga, Lusaka |

## API overview

The integration is SOAP-based. The key methods are:

- **`kon:processCustomerPayment`** — initiate a collection (debit customer's MoMo wallet)
- **`kon:queryCustomerPayment`** — check the status of a payment using the `paymentReference`
- **`kon:queryTransactionStatus`** — alternative status check

cGrate provides a Postman collection for testing.

## The timeout problem

This is the single most important thing to understand about integrating with Konse Konse.

When `processCustomerPayment` times out — your HTTP call gets no response — **the payment can still
succeed on Konse's side.** The customer's MoMo wallet is debited, the funds land on your merchant
balance, but because you never received a response, your system has no record of a successful
payment.

If you treat a timeout as a failure and move on, you end up with **missing deposits**: money sitting
in your merchant wallet that no customer account has been credited for. Cleaning this up means manual
reconciliation against Konse's reports.

### Polling after timeouts

Developers who have integrated with Konse Konse report the following polling strategy, consistent
with guidance from cGrate support (April 2026):

1. **Wait at least 1 minute** after a timeout before the first status query. MNO approval is not
   instant.
2. **Continue polling for up to 6 minutes.** MNO-side approval can be slow, particularly on Zamtel.
3. Use **`kon:queryCustomerPayment`** with the original `paymentReference`.
4. Only mark the transaction as failed after the polling window has expired *and* you have confirmed
   via reconciliation reports that no credit appeared.

## Response code traps

The response codes from Konse Konse's API have some non-obvious behaviours that have caught
integrators off guard.

### Code 202 — `TRANSACTION_NOT_PERMITTED`

This is **not** a payment failure. It is a query-level rejection — it means the query method itself
is not permitted for that transaction in its current state. If your error-handling code treats 202 as
"the payment failed", you will miss successful payments. Developers report that this code can appear
on status queries for transactions that ultimately settled successfully.

### Code 106 — "Transaction reference not found"

Was undocumented until April 2026. This code can appear even for references that exist on the
merchant ledger. Integrators have found that `queryCustomerPayment` appears to only see in-flight
transactions; once a transaction settles, the query may return 106 even though the payment completed.

### Code 105 — "Error checking reference"

Retryable. Treat as a transient error and query again.

### Documentation gaps

The response code documentation has been updated over time. Codes appear in production that are not
in older versions of the docs. If you encounter an unfamiliar code, contact cGrate support rather
than guessing.

## Reconciliation reports

Konse Konse provides two report types:

- **`MERCHANT_OPERATIONS`**
- **`MERCHANT_REFERENCED_OPERATIONS`**

### Build against `MERCHANT_REFERENCED_OPERATIONS`

The `SENDER REF OUT` column in `MERCHANT_OPERATIONS` was previously used by integrators to match
transactions against their own payment references. At some point this column was silently changed to
show `N/A` for all transactions, breaking automated reconciliation for anyone relying on it.

The merchant's payment reference is now found under the **`PAYMENT REFERENCE`** column in the
`MERCHANT_REFERENCED_OPERATIONS` report. If you are building automated reconciliation, use this
report and this column.

## Open questions

- What is the standard fee structure, and is there a volume threshold where pricing changes?
- Is there a webhook/callback mechanism, or is polling the only way to confirm payment status?
- What is the SLA for settlement from merchant wallet to bank account?

If you have integrated with Konse Konse and can fill in any of these gaps,
[open a PR](/contributing/).

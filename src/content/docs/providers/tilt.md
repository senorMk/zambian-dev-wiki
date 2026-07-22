---
title: Tilt Africa (by Zoona)
description: Community notes on Tilt Africa as a disbursement and collections platform — wallet funding, transfer limits, splitting logic, mobile money reliability and reported fees.
verified:
  date: 2026-07-22
  level: reported
volatile: true
---

:::caution[Mix of primary and reported information]
Based on Tilt's own public website and first-hand integration experience (2025-2026).
Fees and limits may have changed since last check — **verify before acting, then
[update this page](/contributing/).**
:::

Tilt Africa is the fintech brand of **Zoona**, a payments business licensed in Zambia since 2009.
It provides unified infrastructure for high-volume money movement across 40+ African markets,
supporting both disbursements and collections. Website: [tiltafrica.com](https://tiltafrica.com).

## At a glance

| | |
| --- | --- |
| **Supports** | Disbursements (bank, mobile wallet, Z CODE vouchers) and collections (Request to Pay, Virtual Accounts, cash via agents) |
| **Setup fee** | Not publicly listed |
| **Transaction fee** | Per-transfer fee, not publicly listed. ~K5 per transfer has been cited in integration discussions — verify current rates. |
| **Funding model** | Pre-funded wallet via bank transfer |
| **API style** | REST |
| **API docs** | [tiltafrica.stoplight.io](https://tiltafrica.stoplight.io/docs/tilt-pay) (Stoplight-hosted, may require direct access) |
| **Multi-currency** | Fund in USD, USDC, USDT with local currency settlement |
| **Contact** | hello@tiltafrica.com; support uses @ilovezoona.com addresses (South Africa-based) |

## Disbursements

Tilt supports three disbursement channels:

- **Bank transfers** — direct to recipient bank accounts.
- **Mobile wallet transfers** — direct to mobile money wallets.
- **Z CODE vouchers** — one-time-use codes redeemable at agents, ATMs and digital wallets. Useful
  when the recipient does not have a bank account or mobile wallet registered.

Batch processing is available for sending to thousands of recipients in a single request.

### The ZMW 50,000 transfer limit

Tilt enforces a **hard per-transfer cap of ZMW 50,000**. Any disbursement above that amount must be
split into multiple child transfers of ZMW 50,000 or less. This is not optional — the platform will
not process a single transfer above the limit.

Implications you need to design for:

1. **Fee multiplication.** Each child transfer attracts its own processing fee. A K120,000
   disbursement split into three transfers costs three times the per-transfer fee — e.g. K15 instead
   of K5 if the rate is K5 per transfer.
2. **Splitting logic lives on your side.** Tilt does not auto-split. You calculate the number of
   child transfers, submit each one, and track them independently.
3. **Completion means all children succeed.** A disbursement should only be marked complete in your
   system when every child transfer has succeeded.
4. **Partial failure handling.** If one child transfer fails, you need retry logic and a fallback
   path (typically manual bank transfer outside Tilt).
5. **Check whether this limit has changed.** The Tilt team has been approached about raising it.
   Confirm the current cap before building around it.

### Account verification failures

Tilt performs account verification before processing disbursements. Verification failures have been
reported even when the recipient's bank details are confirmed correct in the source system. When
verification fails, the practical fallback is a manual bank transfer outside Tilt.

**Build a fallback disbursement path.** Any system relying on Tilt for disbursements should have a
manual or alternative channel ready for cases where Tilt verification does not pass.

### Mobile money reliability

Mobile money disbursements carry a **higher failure rate** than bank-to-bank transfers. Consider:

- Restricting mobile money disbursements to lower-value transfers.
- Adding an extra approval step before mobile money sends.
- At minimum, building robust retry handling with clear failure states.

## Collections

Tilt offers three collection methods:

- **Request to Pay** — initiates a payment request to a customer's mobile wallet or banking app.
- **Virtual Accounts** — assigns unique account numbers per customer or transaction for easier
  reconciliation.
- **Cash collections** — customers pay at agent locations within Tilt's network.

## Wallet funding

Tilt uses a **pre-funded wallet model**:

1. Transfer funds to your Tilt wallet via bank transfer.
2. Send proof of payment (POP) to Tilt support for confirmation.
3. Disbursements are then made from your wallet balance.

Before initiating a batch disbursement, verify that your wallet balance covers the total payout
**plus all child transfer fees** for any amounts that will be split above the ZMW 50,000 limit. The
maximum bank transfer fee in the Zambian market is approximately ZMW 50.00 per transfer.

## API and webhooks

- REST API with documentation on Stoplight.
- Webhooks for real-time payment status updates — use these alongside polling for reliability.
- Batch processing support for high-volume operations.
- Enterprise-grade encryption and fraud controls advertised.

## Open questions

- **Has the ZMW 50,000 per-transfer limit been raised?**
- **What are the current per-transfer fees?** Not publicly listed. The ~K5 figure cited above comes
  from integration discussions and may not reflect current pricing.
- **What is the SLA for wallet funding confirmation?** Proof of payment is sent manually — how
  quickly does the balance become available?
- **What is the mobile money failure rate compared to bank transfers?** Quantified data would help
  developers decide whether to support mobile money disbursements at all.

If you have integrated with Tilt, your experience would help fill these gaps.
[Open a PR](/contributing/).

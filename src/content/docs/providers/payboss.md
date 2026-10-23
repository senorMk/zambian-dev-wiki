---
title: PayBoss by BGS
description: PayBoss services, 2025 pricing, and merchant KYC requirements, with questions to confirm before integration.
verified:
  date: 2026-10-22
  level: primary
volatile: true
---

:::caution[Current terms not confirmed]
The pricing and merchant requirements below are based on BGS information from 2025. The review date above does not confirm current prices or service availability. Ask BGS for current terms before integration.
:::

PayBoss is a payment platform from **BGS (Bridging Gap Solutions)**. BGS lists collections, disbursements, bill payments, and a merchant portal with reports as its services.

## At a glance

| Item | BGS information |
| --- | --- |
| **Mobile money** | Collections and direct bulk disbursements across Airtel, MTN, and Zamtel |
| **Cards** | BGS lists Visa, Mastercard, Amex, Maestro, and China Union; live processing has not been tested for this page |
| **Setup fee** | ZMW 20,000, paid once (2025) |
| **Mobile money fees** | Fixed ZMW fees by transaction range; see [Pricing](#pricing-2025) |
| **Bulk disbursement fee** | 2%; invoiced at the end of the month |
| **Card fee** | 4% per transaction |
| **Integration** | APIs and USSD till collections; API specification not supplied |
| **Settlement time** | Not confirmed |
| **Contact** | fintech@bgsgroup.co.zm |
| **Website** | [bgsgroup.co.zm](https://www.bgsgroup.co.zm) |
| **Merchant portal** | [payboss-merchants.bgsgroup.co.zm](https://payboss-merchants.bgsgroup.co.zm) |

## Services

BGS describes these functions:

- **Collections:** API integration and USSD till collections, with requests sent through PayBoss to Airtel, MTN, or Zamtel.
- **Disbursements:** one upload for payments to multiple recipients across the three networks. A separate voucher option lets recipients redeem a voucher into an account of their choice.
- **Bill payments:** API access for ZESCO, DStv, GOtv, and airtime purchases.
- **Workspaces:** separate areas in the merchant portal for collections, disbursements, or bill payments, with wallet, terminal, and team management.
- **Reports:** transaction reports and analytics, with tracking for POS and mobile POS terminals.
- **Super merchants:** a merchant can register other merchants, create their workspaces, and manage users and reports. BGS states that merchant KYC is required. It also describes an option to use the super merchant's own mobile network integration.

BGS describes funds passing through its settlement account to the merchant settlement account. The settlement schedule, minimum amount, and fee are not confirmed.

## Pricing (2025)

These fees are based on BGS pricing from 2025. Confirm the applicable fees with BGS.

### Setup

The setup fee is **ZMW 20,000**, paid once.

### Mobile money transactions

Both the transaction amount and the fee are in **ZMW**. These are fixed fees, not percentages.

| Transaction amount (ZMW) | Fee (ZMW) |
| --- | --- |
| 1–150 | 0.80 |
| 150.01–500 | 1.50 |
| 500.01–1,000 | 2.50 |
| 1,000.01–3,000 | 3.75 |
| 3,000.01–5,000 | 5.00 |
| 5,000.01–10,000 | 7.50 |

Fees outside these ranges are not confirmed. The ranges do not confirm transaction limits.

### Disbursements and cards

| Service | Fee | Note |
| --- | --- | --- |
| Bulk disbursement | 2% | Invoiced at the end of the month |
| Card transaction | 4% per transaction | Visa, Mastercard, Amex, Maestro, and China Union are listed |

Confirm whether fees include tax, who pays the fees, and whether minimum fees apply.

## Merchant KYC requirements

BGS lists these documents for merchant registration. KYC means Know Your Customer.

- Identification issued by the government for all directors and beneficial owners.
- Recent colour photographs of key personnel.
- Valid visas for foreign nationals, with more than 90 days of validity.
- Proof of the business address: a lease agreement or utility bills.
- Business registration certificates: a PACRA Certificate.
- Company formation documents: Articles of Association or Incorporation.
- Beneficial ownership declarations.
- Financial documents: 3–6 months of bank statements.

Confirm the approval time and any requirements for your business type with BGS.

## Questions before integration

- Are the 2025 fees still applicable?
- What are the settlement schedule, minimum amount, and withdrawal fees?
- Which card networks are available for live online payments?
- How can developers obtain API documentation and a test environment?
- How do authentication, payment status checks, callbacks, and duplicate requests work?
- What are the transaction limits and fees outside the listed mobile money ranges?
- What are the refund, failed transaction, and chargeback terms?
- What are the funding requirements for disbursements and the fees for vouchers and bill payments?

See the [provider comparison](/payments/comparison/) for other payment providers.

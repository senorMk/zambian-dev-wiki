---
title: How we verify claims
description: The sourcing rules for the Zambian Dev Wiki — how claims are graded, when they expire, and what gets reverted.
sidebar:
  order: 3
---

Most of what this wiki knows started as a community contribution. That is a legitimate
starting point and a terrible ending point. This page is the rule for turning one into the other.

## The three grades

Every factual page carries a `verified` stamp in its frontmatter:

```yaml
verified:
  date: 2026-07-19
  by: your-github-handle
  level: primary
```

| Level | Means | Example |
| --- | --- | --- |
| `primary` | Confirmed against the provider's own docs, pricing page, contract, or a written support reply. | "PawaPay's docs list these endpoints" |
| `reported` | A named contributor's own first-hand experience, with a date. | "I onboarded with DPO in March 2026; live keys took 3 weeks." |
| `hearsay` | Repeated in community discussion; nobody re-checked it. | "Someone shared that it was like 3%" |

**`hearsay` is a lead, not a fact.** Pages may carry it, clearly marked, because knowing that a
question is contested is itself useful. But hearsay must never be written in the flat declarative
voice that makes readers act on it.

## Why this matters here specifically

Community discussions have contained, verifiably:

- **A fee table for four payment providers that an AI assistant hallucinated** in
  May 2024. Nobody challenged it. It read exactly like the real thing.
- **A licensing answer about Lenovo** given to someone asking about Lenco, followed by a second
  answer about audio patents. Both were pasted AI output.
- **Setup fees for the same provider quoted at $500 and $1,000** five months apart, and for another
  at K5,000 by one person and "no setup fee" by four others the same day.
- **BOZ licensing cost estimates ranging from "less than K5,000" to "$70,000 or more"** with no
  reconciliation, given confidently by different people over two years.

If this wiki reproduces that with a nicer stylesheet, it has made things worse, because a wiki
carries more authority than an informal discussion.

## Claims that expire

Set `volatile: true` on any page whose facts rot. Fees, availability, uptime, approval timelines,
and anything a provider controls unilaterally all qualify.

Volatile pages older than **six months** should be treated as unverified regardless of their stamp.
If you are reading one, the most useful thing you can do is re-check one fact and update the date.

## Claims we will not publish unsourced

Some categories can cause real harm if wrong. These require `primary` sourcing or an explicit
"unverified" banner — never a bare assertion:

- **Licensing and legal requirements.** Whether you need a Bank of Zambia licence, what it costs,
  what happens if you operate without one. Get it from BOZ's own published requirements, and say so.
- **Tax and regulatory obligations.** ZRA, PACRA, 2PIN, the Cyber Crime Act, the Data Protection Act.
- **Contract terms.** Rolling reserves, exclusivity, chargeback liability. Quote the contract clause
  or don't state it.
- **Security guidance.** Community discussions have included the claim that API keys need little protection because
  "they are only used for authentication and authorisation." That is wrong and it was corrected in
  the thread. Wrong security advice on a wiki gets copied.

## What gets reverted

- Marketing copy, from anyone, including [disclosed provider staff](/contributing/#if-you-work-for-a-provider).
- Unsourced claims about a named competitor's reliability or solvency.
- AI-generated text pasted without the contributor verifying every factual claim in it. Use the
  tools; own the output.
- Anything naming a private individual, or quoting a person identifiably without their consent.
  See [contributing](/contributing/#privacy).

## Disagreement is content

When practitioners genuinely disagree — and on Zambian payment rails they frequently do — the wiki
records the disagreement rather than picking a winner:

> **Contested.** Approval times for Lenco are reported as both "weeks" (Nov 2024) and "took a day and
> done" (Sep 2025). The SLA appears to have changed more than once. Treat any single report as a
> snapshot.

That is more useful than false confidence, and it invites the correction that resolves it.

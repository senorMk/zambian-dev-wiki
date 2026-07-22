---
title: How to contribute
description: How to add or correct a page on the Zambian Dev Wiki — the edit workflow, sourcing rules, vendor disclosure and privacy policy.
sidebar:
  order: 2
---

Every page has an **Edit this page** link at the bottom. It opens the Markdown file on GitHub,
where you can make a change and open a pull request without ever cloning anything.

You do not need permission and you do not need to be an expert. The most valuable contributions here
are small.

## The most useful things you can do

**1. Correct a fee, rate, or availability claim.** Many pages are graded
`hearsay` — real practitioners reported it, but nobody checked it against a provider's
own pricing page. Turning one `hearsay` into a `primary` is worth more than a new page.

**2. Add a date to something.** A claim with no date is nearly useless in this market. If you know
when something was true, say so.

**3. Answer an open question.** Several pages end with questions the community asked repeatedly and
never resolved — what DPO actually charges per transaction, what a USSD shortcode costs, what
Flutterwave's recurring-payment rates are. These have been open for years.

**4. Report your own onboarding.** "I registered with X in March 2026, live keys took N weeks,
they asked for these documents" is `reported`-grade evidence and it is exactly what people need.

## Editing a page

```bash
git clone https://github.com/senorMk/zambian-dev-wiki
cd zambian-dev-wiki
npm install
npm run dev          # http://localhost:4321
```

Pages live in `src/content/docs/`. They are Markdown with a frontmatter block:

```yaml
---
title: Which payment gateway should you use in Zambia?
description: One sentence. This becomes the Google result snippet — write it for a human.
verified:
  date: 2026-07-19        # ISO date YOU checked it
  by: your-github-handle  # GitHub username — no real name or email required
  level: primary          # primary | reported | hearsay
volatile: true            # true if fees/availability/uptime
---
```

When you change a fact, **update `verified.date` and `verified.by`**. If you did not re-check the
whole page, only the part you touched, say so in the PR description.

## Sourcing rules

Read [how we verify claims](/verification/) before adding anything factual. The short version:

- Say **when** something was true.
- Say **how you know** — the provider's docs, your own account, or someone's say-so.
- Do not launder hearsay into fact by rewriting it in confident prose.
- Licensing, tax, contract terms and security guidance need `primary` sources or an explicit
  unverified banner. These can cause real harm if wrong.

### If you use an AI assistant

Fine — but you own every claim in what you submit. Community discussions have included a
hallucinated fee table for four payment providers that went unchallenged for
years, and a licensing answer about **Lenovo** given to someone asking about **Lenco**. Both looked
completely plausible. Verify before you paste.

## If you work for a provider

You are welcome here, and you are often the best source for facts about your own product.
Two rules:

1. **Disclose it.** Put it in your PR description and in the page if you are writing about your
   employer. A line like "Disclosure: I work at X" is enough.
2. **Facts, not positioning.** "Our settlement is T+1" is a fact and we want it. "The most reliable
   gateway in Zambia" is marketing and it gets reverted.

You may not remove or soften sourced criticism of your own product. You may add a dated response to
it, and that response will be published alongside.

The reason this rule exists: in Zambian developer communities, at least two providers had staff
recommending their own products without disclosure, and one was called out publicly for it. Nobody
benefits from that pattern moving here.

## Privacy

This wiki is built from community contributions.

Contributions must not:

- Name or quote a private individual identifiably without their consent.
- Include phone numbers, email addresses, or account identifiers of real people.
- Reproduce screenshots containing anyone else's personal data.

Write the knowledge, not the conversation. "Merchants report approval taking 2–3 weeks" is the
useful part; who said it is not.

## Style

- **Write the title as the question people actually type.** "Does Stripe work in Zambia?" beats
  "Stripe availability analysis."
- Lead with the answer. Context after.
- Kwacha as `K5,000` or `ZMW 5,000`; always state the currency for USD figures.
- Prefer tables for anything with more than three comparable values.
- Link related pages generously — it helps readers and it helps the wiki get found.

## Code of conduct

Be decent. Disagree with claims, not with people. Anyone can open a PR here regardless of
experience level, employer, or how long they have been writing code — gatekeeping the wiki defeats
the point of having one.

# Contributing

This file covers **how changes move through the repo**. For what makes a change
*good* — sourcing rules, verification grades, vendor disclosure, privacy — read
[How to contribute](https://zambia-dev-wiki.pages.dev/contributing/) and
[How we verify claims](https://zambia-dev-wiki.pages.dev/verification/) on the wiki
itself. Those pages are the source of truth for editorial policy; this file
deliberately does not repeat them.

## You do not need to clone anything

Every page has an **Edit this page** link at the bottom. It opens the Markdown on
GitHub, and GitHub handles the fork and the branch for you. For a fee correction or
a typo, that is the whole workflow.

The rest of this file is for larger changes.

## We use trunk-based development

`main` is the trunk. It is always deployable, and it is what
[zambia-dev-wiki.pages.dev](https://zambia-dev-wiki.pages.dev) serves.

The rules:

- **Branch off `main`, merge back into `main`.** There is no `develop`, no `release/*`,
  no long-lived integration branch. If you find yourself creating one, something has
  gone wrong.
- **Branches are short-lived — hours to days, never weeks.** A branch that lives long
  enough to drift is the thing this model exists to prevent.
- **Small changes, merged often.** One correction per PR beats a ten-page sweep. It
  reviews faster, and if it turns out to be wrong it reverts cleanly.
- **`main` is never broken.** Every merge triggers a production deploy. A bad merge is
  live in about a minute.

Branch names are not enforced, but `fix/`, `docs/`, `content/` prefixes help:

```bash
git checkout main && git pull
git checkout -b content/airtel-money-fees
# ... edit ...
git push -u origin content/airtel-money-fees
gh pr create --fill
```

### Why PRs, if this is trunk-based?

Strict trunk-based development means committing straight to the trunk. We don't,
for two reasons: contributors are mostly drive-by and can't push to this repo
anyway, and every PR gets a **preview deploy** so a factual change can be read in
its rendered form before it goes live.

That still counts as trunk-based — the constraint that matters is that branches
are short-lived and there is exactly one integration branch. It is not a
justification for a two-week feature branch.

## What happens when you open a PR

1. Cloudflare Pages builds your branch and posts a **preview URL** on the PR.
   Open it and read your change as a reader will see it.
2. A maintainer reviews. For factual changes the review is mostly "how do you
   know?" — the PR template asks this, and it is the part that matters.
3. On merge, `main` deploys to production automatically. Your branch is deleted.

`main` is protected: no direct pushes, no force-pushes, no deletion. Approvals are
not required, so maintainers can self-merge — the gate is the preview build and the
sourcing question, not a rubber stamp.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # what Cloudflare runs
```

Node 20 (pinned in `.nvmrc`). Pages live in `src/content/docs/` as Markdown with a
frontmatter block — the wiki's [contributing page](https://zambia-dev-wiki.pages.dev/contributing/)
documents the fields, including `verified.date` and `verified.level`, which you must
update when you change a fact.

## Reverting

Because every change is small and squashed, reverting is one commit:

```bash
git revert <sha>
```

Open it as a PR like anything else. Reverting a wrong fee is not a failure — it is
the system working. A wrong number that stays up is the failure.
